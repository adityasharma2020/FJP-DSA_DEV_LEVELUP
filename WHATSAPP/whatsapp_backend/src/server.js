import app from './app.js'
import logger from './config/logger.config.js'

//env variables
const PORT = process.env.PORT || 5000

let server = app.listen(PORT, () => {
  logger.info(`server is listening at ${PORT}`)
  console.log('process id', process.pid)
  // throw new Error('error in server')
})

//----------handle server errors----------------------
const exitHandler = () => {
  if (server) {
    logger.info('server closed')
    process.exit(1)
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error) => {
  logger.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

//SIGTERMSIGTERM is a signal in Unix-like operating systems that stands for 
//"termination signal." It's a way for a process to receive a request to terminate gracefully.
process.on('SIGTERM', () => {
  if (server) {
    logger.info('server closed')
    process.exit(1)
  }
})
