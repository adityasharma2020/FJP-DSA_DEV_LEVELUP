const bcrypt = require('bcrypt')
const User = require('../model/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//signup route handler

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    //if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      })
    }

    //secure password
    let hashedPassword
    try {
      hashedPassword = await bcrypt.hash(password, 10)
    } catch {
      return res.status(500).json({
        success: false,
        message: 'Error in hashing password',
      })
    }

    //create entry for user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    })

    res.status(200).json({
      success: true,
      message: 'user created successfully.',
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: 'user cnannot be registered. Please try again later',
    })
  }
}

exports.login = async (req, res) => {
  try {
    //data fetch
    const { email, password } = req.body

    //validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'please fill al details carefully',
      })
    }

    //check for registered user
    let user = await User.findOne({ email })
    if (!user) {
      return res.ststus(401).json({
        success: false,
        message: 'user is not registered',
      })
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    }
    //verify password and generate a JWT token
    if (await bcrypt.compare(password, user.password)) {
      //password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' })

      //convert the user instance to object to add the property in the user instance
      user = user.toObject()
      user.token = token
      //removing password from user object , not from the database
      user.password = undefined

      //cookie options :
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      }

      res.cookie('token', token, options).status(200).json({
        success: true,
        token,
        user,
        message: 'user logged in successfully',
      })
    } else {
      //password do not match
      res.status(403).json({
        success: false,
        message: 'password incorrect',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Login failure',
    })
  }
}
