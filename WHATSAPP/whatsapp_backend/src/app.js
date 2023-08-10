import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import fileUpload from 'express-fileupload'
import cors from 'cors'


// dotenv configuration
dotenv.config()

//create express app
const app = express()

//morgan
if (process.env.NODE_ENV != 'production') {
  app.use(morgan('dev'))
}
//helmet
app.use(helmet())

//parse josn request url
app.use(express.urlencoded({ extended: true }))

//parse json request body
app.use(express.json())

//express mongo sanitize user data
app.use(mongoSanitize())

// cookie parser
app.use(cookieParser())

//gzip compression
app.use(compression())

//express fileupload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
)

//cors
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello from the server')
})

export default app
