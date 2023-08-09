const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
require('dotenv').config()
const fileSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
})

//postMiddleware
fileSchema.post('save', async function (doc) {
  try {
    console.log('Doc', doc)
    //transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    //send mail
    let info = await transporter.sendMail({
      from: 'Aditya15116617@gmail.com ',
      to: doc.email,
      subject: 'new file uploaded to cloudinary',
      html: `<h2>hello file uploaded</h2> view here: <p>link: <a href =${doc.imageUrl}>click here to see</p>`,
    })

    console.log(info)
  } catch (error) {
    console.log(error)
  }
})
module.exports = mongoose.model('File', fileSchema)
