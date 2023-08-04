const express = require('express')
const app = express()

// load config file from env
require('dotenv').config()
const PORT = process.env.PORT || 4000

//middleware to parse json request
app.use(express.json())

//import route
const blog = require("./routes/blog")
app.use("/api/v1",blog)

//start server
app.listen(PORT, () => {
  console.log(`started at port ${PORT}`)
})

//connect to database
const connectWithDb = require('./config/database')
connectWithDb()

//default route of our application
app.get('/', (req, res) => {
  res.send(`<h1>this is our homepage</h1>`)
})
