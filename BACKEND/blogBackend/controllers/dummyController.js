exports.dummyController = (req, res) => {
  try {
    res.send('this is a dummy   page')
  } catch (err) {
    console.log(err)
  }
}
