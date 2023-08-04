//imprt models
const Comment = require('../models/commentModel')
const Post = require('../models/postModel')

//business logic

exports.createComment = async (req, res) => {
  try {
    //fetch data from req body
    const { post, user, body } = req.body

    //create a comment object, we are using new keyword here, as Comment is a contructor function given by mongoose.model
    const comment = new Comment({
      post,
      user,
      body,
    })

    //save the new comment in database
    const savedComment = await comment.save()

    // find the post by  ID , and then add the new comment in the comment Array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true }
    ).populate('comments') // populate the comments array with comment document

    res.json({
      success: true,
      post: updatedPost,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: error.message,
    })
  }
}
