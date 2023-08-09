//import needed models
const fileUpload = require('express-fileupload')
const File = require('../models/File')
const cloudinary = require('cloudinary').v2

//handler function - localFleUpload

exports.localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file
    console.log('file : ', file)

    //server path where we want to store the file
    let path =
      __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`
    console.log('path:', path)
    //usingn move function we want to move the file to the given  path.
    file.mv(path, (err) => {
      console.log(err)
    })

    res.status(200).json({
      success: true,
      message: 'local file uploaded successfully',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'internal server error',
    })
  }
}

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type)
}

async function uploadFileToCloudinary(file, folder, quality) {
  //give option like folder and resource-type

  const options = { folder, resource_type: 'auto' }
  if (quality) {
    options.quality = quality
  }
  return await cloudinary.uploader.upload(file.tempFilePath, options)
}

//------------------image upload handler----------------
exports.imageUpload = async (req, res) => {
  try {
    //fetch data from req.
    const { name, tags, email } = req.body
    console.log(name, tags, email)

    const file = req.files.imgaeFile
    console.log(file)

    //validation
    const supportedTypes = ['jpg', 'jpeg', 'png']
    const fileType = file.name.split('.')[1].toLowerCase()

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: 'file format not supported',
      })
    }

    //cloudinary upload
    console.log('cloudinary')
    //give  the file and the folder name(fileUpload) in which we want to upload cloudinary
    const response = await uploadFileToCloudinary(file, 'fileUpload')
    console.log('response:', response)
    // DB entry save
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    })

    res.json({
      success: true,
      message: 'image uploaded successfully',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Intenal server error',
    })
  }
}

//------------------video upload handler----------------
exports.videoUpload = async (req, res) => {
  try {
    //fetch data from req.
    const { name, tags, email } = req.body
    console.log(name, tags, email)

    const file = req.files.videoFile
    console.log(file)

    //validation
    const supportedTypes = ['mp4', 'mov']
    const fileType = file.name.split('.')[1].toLowerCase()
    const MAX_VIDEO_SIZE = 5 * 1024 * 1024
    // video  upload size limit
    if (file.size > MAX_VIDEO_SIZE) {
      res.status(413).json({
        success: false,
        message: 'file size is more than 5MB',
      })
    }

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: 'file format not supported',
      })
    }

    //cloudinary upload

    //give  the file and the folder name(fileUpload) in which we want to upload cloudinary
    const response = await uploadFileToCloudinary(file, 'fileUpload')
    console.log('response:', response)
    // DB entry save
    const fileData = await File.create({
      name,
      tags,
      email,
      videoUrl: response.secure_url,
    })

    res.json({
      success: true,
      message: 'video uploaded successfully',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Intenal server error',
    })
  }
}

//---------------image size reducer ----------
exports.imageReducerUpload = async (req, res) => {
  try {
    //fetch data from req.
    const { name, tags, email } = req.body
    console.log(name, tags, email)

    const file = req.files.imageFile
    console.log(file)

    //validation
    const supportedTypes = ['jpg', 'jpeg', 'png']
    const fileType = file.name.split('.')[1].toLowerCase()

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: 'file format not supported',
      })
    }

    //cloudinary upload

    //give  the file and the folder name(fileUpload) in which we want to upload cloudinary
    const response = await uploadFileToCloudinary(file, 'fileUpload', 30)
    console.log('response:', response)
    // DB entry save
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    })

    res.json({
      success: true,
      message: 'image uploaded successfully',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Intenal server error',
    })
  }
}
