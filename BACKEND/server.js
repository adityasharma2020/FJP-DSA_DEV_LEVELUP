//server instantiate
const express = require('express')
const app = express()

//used to parse req.body in expresss ==> for put and post
const bodyParser = require('body-parser')

// specifically parse JSON data and add it to req.body
app.use(bodyParser.json())

// activate the server at port 3000
app.listen(3000, () => {
  console.log('server started at port 3000')
})

// routes
app.get('/', (req, res) => {
  res.send('hello jee,kaise ho saree')
})

app.post('/api/cars', (req, res) => {
  const { name, brand } = req.body
  console.log(name)
  console.log(brand)
  res.send('car submitted successfully')
})

// connect it to our database
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/MyNewDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection successful'))
  .catch((error) => console.log(error))
