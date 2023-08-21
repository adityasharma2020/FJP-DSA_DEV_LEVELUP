import { createUser } from '../services/auth.service.js'
import { generateToken } from '../services/token.service.js'
export const register = async (req, res, next) => {
  try {
    console.log(process.env.ACCESS_TOKEN_SECRET)
    const { name, email, picture, status, password } = req.body
    const newUser = await createUser({ name, email, picture, status, password })
    console.log('hello')
    const access_token = await generateToken(
      { userId: newUser._id },
      '1d',
      process.env.ACCESS_TOKEN_SECRET
    )
    const refresh_token = await generateToken(
      { userId: newUser._id },
      '30d',
      process.env.REFRESH_TOKEN_SECRET
    )
    res.json({
      message: 'register success.',
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        picture: newUser.picture,
        status: newUser.status,
        token: access_token,
      },
    })
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}

export const logout = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}

export const refreshToken = async (req, res, next) => {
  try {
  } catch (error) {
    next(error)
  }
}
