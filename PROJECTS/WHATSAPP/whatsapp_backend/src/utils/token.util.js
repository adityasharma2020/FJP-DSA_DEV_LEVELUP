import jwt from 'jsonwebtoken'
import logger from '../config/logger.config.js'
export const sign = async (payload, expiresIn, secret) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: expiresIn,
      },
      (error, token) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(token)
        }
      }
    )
  })
}
