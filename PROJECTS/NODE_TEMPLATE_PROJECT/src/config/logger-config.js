const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level}: ${message}`
})

const logger = createLogger({
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
  ],
})

module.exports = logger
