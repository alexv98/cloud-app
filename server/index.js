const express = require ('express')
const mongoose = require ("mongoose")
const authRouter = require('./routes/auth.routes.js')

const app = express()
const PORT = 5000

app.use(express.json())
app.use('/api/auth', authRouter)


const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:123123123@cloud.a6shyff.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => {
      console.log('Server started on port', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
