import app from './app.js'
import logger from './config/logger.config.js'
import Logger from './config/logger.config.js'

//env variables
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  logger.info(`server is listening at ${PORT}`)
  throw new Error('error in server')
})
