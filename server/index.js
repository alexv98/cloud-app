const express = require ('express')
const mongoose = require ("mongoose")
const authRouter = require('./routes/auth.routes.js')
require("dotenv").config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/api/auth', authRouter)


const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => {
      console.log('Server started on port', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()