const Todo = require('../models/Todo')

//define route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from the database
    const todos = await Todo.find({})

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: 'Entire todo data is fetched',
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      data: 'internal server error',
      message: err.message,
    })
  }
}
