const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: string,
  },
})

module.exports = mongoose.model('File', fileSchema)
