const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const fileService = require('../services/fileService')
const File = require('../models/File')

const router = Router()

router.post(
  '/registration',
  [
    check('name', 'Uncorrect name').isString(),
    check('lastname', 'Uncorrect lastname').isString(),
    check('email', 'Uncorrect email').isEmail(),
    check(
      'password',
      'Password must be longer than 3 and shorter than 12 symbols'
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Uncorrect request', errors })
      }

      const { name, lastname, email, password } = req.body
      const candidate = await User.findOne({ email })
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'User with this email already exist!' })
      }

      const hashPassword = await bcrypt.hash(password, 8)
      const user = new User({ name, lastname, email, password: hashPassword })
      await user.save()
      await fileService.createDir(new File({ user: user.id, name: '' }))
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
      })
      return res.json({
        token,
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
        files: user.files,
      })
    } catch (e) {
      console.log(e)
      res.send({ message: 'Server error' })
    }
  }
)

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User is not found' })
    }
    const isPassValue = await bcrypt.compareSync(password, user.password)
    if (!isPassValue) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    })
    return res.json({
      token,
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      diskSpace: user.diskSpace,
      usedSpace: user.usedSpace,
      avatar: user.avatar,
      files: user.files,
    })
  } catch (e) {
    console.log(e)
    res.send({ message: 'Server error' })
  }
})

router.get('/auth', async (req, res) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    if (!accessToken) {
      return res.status(401).json({ message: 'access token is empty' })
    }
    req.user = jwt.verify(JSON.parse(accessToken), process.env.SECRET_KEY)

    const user = await User.findOne({ _id: req.user.id })
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    })

    return res.json({
      token,
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      diskSpace: user.diskSpace,
      usedSpace: user.usedSpace,
      avatar: user.avatar,
      files: user.files,
    })
  } catch (e) {
    console.log(e)
    res.send({ message: e })
  }
})

module.exports = router
