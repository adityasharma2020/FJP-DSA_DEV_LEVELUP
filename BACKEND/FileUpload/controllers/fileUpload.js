//import needed models
const File = require('../models/File')

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
