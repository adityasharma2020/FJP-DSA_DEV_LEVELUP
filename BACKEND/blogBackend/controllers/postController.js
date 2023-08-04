const Post = require('../models/postModel')

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body

    const post = new Post({ title, body })

    const savedpost = await post.save()

    res.status(200).json({
      data: savedpost,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}


exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('comments')

    res.status(200).json({
      success: true,
      posts: posts,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}
