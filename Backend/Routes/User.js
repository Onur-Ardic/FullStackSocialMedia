const express = require('express')
const authService = require('../Services/authService')
const router = express.Router()
const authMiddleware = require('../Services/authMiddleware')

router.post('/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const result = await authService.register(username, email, password)
    res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi', user: result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await authService.login(email, password)
    res.status(200).json({ message: 'Kullanıcı başarıyla giriş yaptı', token: result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await authService.getUserById(req.userId)
    if (!user) {
      return res.status(404).json({ error: 'Kullanıcı bulunamadı' })
    }
    res.status(200).json({
      id: user.id,
      username: user.user_name,
      email: user.user_email,
    })
  } catch (error) {
    res.status(500).json({ error: 'Sunucu hatası' })
  }
})

module.exports = router
