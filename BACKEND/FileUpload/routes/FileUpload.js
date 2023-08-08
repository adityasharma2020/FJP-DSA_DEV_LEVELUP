const express = require('express')
const router = express.Router()

//controller
const {
  //   imageUpload,
  //   videoUpload,
  //   imageReducerUpload,
  localFileUpload,
} = require('../controllers/fileUpload')

//api routes

router.post('/localFileUpload', localFileUpload)
// router.post("/imageUpload",imageUpload)
// router.post("/videoUpload",videoUpload)
// router.post("/videoUpload",videoUpload)

module.exports = router