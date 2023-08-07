const express = require('express')

const router = express.Router()

const { login, signUp } = require('../controller/Auth')

router.post('/signup', signUp)
router.post('/login', login)

module.exports = router
