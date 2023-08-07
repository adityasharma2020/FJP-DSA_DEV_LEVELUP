const express = require('express')
const app = express()

//include dotenv variabes in the process object
require('dotenv').config()
const PORT = process.env.PORT

// ! cookie parser = what is this and why we  use it.
app.use(express.json())

//database connections
require('./config/database').connect()

//import route and mount
const user = require('./routes/user')
app.use('/api/v1', user)

//activate
app.listen(process.env.PORT, () => {
  console.log(`app is listening at ${PORT}`)
})
