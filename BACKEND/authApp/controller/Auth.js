const bcrypt = require('bcrypt')
const User = require('../model/User')

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
    const { email, password } = req.body

    const name = await User.findOne({ email })
  } catch (error) {}
}
