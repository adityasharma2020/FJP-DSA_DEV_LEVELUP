const fs = require('fs')
const TransformStream = require('stream').Transform

const readStream = fs.createReadStream('./index.html')
const writeStream = process.stdout
const fileWriteStream = fs.createReadStream('./write.txt')
const transformstream = new TransformStream({
  transform(chunk, enc, cb) {
    this.push(chunk.toString().toUpperCase())
    setTimeout(cb, 1000)
  },
})

const outputStream = readStream.pipe(transformstream)

outputStream.pipe(writeStream)
// outputStream.pipe(fileWriteStream)
