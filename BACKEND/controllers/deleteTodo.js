const Todo = require('../models/Todo')

//define route handler
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findByIdAndDelete(id)

    res.json({
      success: true,
      data: todo,
      message: 'todo deleted successfully',
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
