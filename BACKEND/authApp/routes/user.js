const express = require('express')

const router = express.router()

const { login, signUp } = require('../controller/Auth')

router.post('/login', login)
router.post('/signup', signUp)
