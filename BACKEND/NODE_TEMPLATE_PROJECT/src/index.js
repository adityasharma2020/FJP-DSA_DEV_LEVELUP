const { ServerConfig, Logger } = require('./config/index')
const express = require('express')
const apiRoutes = require('./routes')

const app = express()
app.use('/api', apiRoutes)

app.listen(3000, (error) => {
  if (error) {
    console.error('Error starting the server:', error)
  } else {
    console.log(`Server started on port: 3000`)
    Logger.info('Successfully started server')
  }
})
