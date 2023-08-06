const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes.js')
const fileRouter = require('./routes/file.routes.js')
const corsMiddleware = require('./middleware/cors.middleware')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => {
      console.log('Server started on port: ', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
