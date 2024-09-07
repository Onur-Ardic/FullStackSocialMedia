const express = require('express')
const authService = require('../Services/authService')
const router = express.Router()

router.post('/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const result = await authService.register(username, email, password)
    res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi', user: result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
