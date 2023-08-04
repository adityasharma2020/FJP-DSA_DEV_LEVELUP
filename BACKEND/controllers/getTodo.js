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

exports.getTodoById = async (req, res) => {
  try {
    //extract todo items basis on id
    const id = req.params.id
    const todo = await Todo.findById({ _id: id })

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'No data found with given id.',
      })
    }

    //data for given id Found
    res.status(200).json({
      success: true,
      message: 'Todo found successfully',
      data: todo,
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
