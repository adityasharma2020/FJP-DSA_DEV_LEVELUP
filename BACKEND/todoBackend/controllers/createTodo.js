const Todo = require('../models/Todo.js')
const bodyParser = require('body-parser')

//define route handler

exports.createTodo = async (req, res) => {
  try {
    //extract title and description from request body
    const { title, description } = req.body

    //create a new todo Object and insert in DB
    const response = await Todo.create({ title, description })

    //send a json respnse with success falg
    res.status(200).json({
      success: true,
      data: response,
      message: 'Entry created successfully',
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
