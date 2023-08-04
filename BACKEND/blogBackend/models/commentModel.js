//import mongoose
const mongoose = require('mongoose')

//comment schema model
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    require: true,
  },
})

//export
module.exports = mongoose.model('Comment', commentSchema)
