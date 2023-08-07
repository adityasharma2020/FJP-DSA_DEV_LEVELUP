const express = require('express')

const router = express.Router()

const { login, signUp } = require('../controller/Auth')
const { auth, isStudent, isAdmin } = require('../middleware/auth')
router.post('/signup', signUp)
router.post('/login', login)

//testting route
router.get('/test', auth, (req, res) => {
  res.json({
    success: true,
    message: 'welcome to protected route for tests.',
  })
})

//protected routes
router.get('/student', auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: 'welcome to protected route for student.',
  })
})

router.get('/admin', auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'welcome to protected route for admin.',
  })
})

module.exports = router
