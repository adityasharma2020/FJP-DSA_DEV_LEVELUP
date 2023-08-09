//app create
const express = require('express')
const app = express()

require('dotenv').config()
//PORt find out
const PORT = process.env.PORT || 3000

//add middle ware
app.use(express.json())
const fileUpload = require('express-fileupload')
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
)

//db connect
const db = require('./config/database')
db.connect()

//cloudinary connect
const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect()

//api routes mount
const Upload = require('./routes/FileUpload')
app.use('/api/v1/upload', Upload)

//activate server
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`)
})
