const mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
  mongoose 
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connected successfully')
    })
    .catch((error) => {
      console.log('DB CONNECTION issue')
      console.log(error)
      process.exit(1)
    })
}
