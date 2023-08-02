// connect it to our database
const mongoose = require('mongoose')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL
const dbConnect = () => {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connection successful'))
    .catch((error) => {
      console.log('issue in DB connection')
      console.error(error)
      //this is to forecefully stop the server
      process.exit(1)
    })
}

module.exports = dbConnect
