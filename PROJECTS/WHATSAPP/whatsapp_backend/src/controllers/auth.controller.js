import { createUser, signUser } from '../services/auth.service.js'
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

    //send refresh token in cookies
    res.cookie('refreshToken', refresh_token, {
      httpOnly: true,
      path: '/api/v1/auth/refreshtoken',
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    })
    console.table({ access_token, refresh_token })
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
    const { email, password } = req.body

    const user = await signUser(email, password)

    const access_token = await generateToken(
      { userId: user._id },
      '1d',
      process.env.ACCESS_TOKEN_SECRET
    )
    const refresh_token = await generateToken(
      { userId: user._id },
      '30d',
      process.env.REFRESH_TOKEN_SECRET
    )

    //send refresh token in cookies
    res.cookie('refreshToken', refresh_token, {
      httpOnly: true,
      path: '/api/v1/auth/refreshtoken',
      maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    })
    console.table({ access_token, refresh_token })
    res.json({
      message: 'register success.',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        status: user.status,
        token: access_token,
      },
    })
  } catch (error) {
    next(error)
  }
}

export const logout = async (req, res, next) => {
  try {
    res.clearCookie('refreshtoken', { path: '/api/v1/auth/refreshtoken' })
    res.json({
      message: 'logged out',
    })
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
