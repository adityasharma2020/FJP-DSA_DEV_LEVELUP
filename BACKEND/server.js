const express = require('express')
const app = express()

// load config file from env
require('dotenv').config();
const PORT = process.env.PORT || 4000

//middleware to parse json request
app.use(express.json())

//import routes for TODO API
const todoRoutes = require('./routes/todos')

//mount the todo API routess i.e define what directory structures we want
app.use('/api/v1', todoRoutes)

//start server
app.listen(PORT, () => {
  console.log(`started at port ${PORT}`)
})

//connect to database
const dbConnect = require('./config/database')
dbConnect()

//default route of our application
app.get('/', (req, res) => {
  res.send(`<h1>this is our homepage</h1>`)
})
