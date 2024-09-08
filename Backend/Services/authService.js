const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../Models/Users')
const { Op } = require('sequelize')
const { toast } = require('react-hot-toast')
const authService = {
  async register(username, email, password) {
    const existingUser = await Users.findOne({
      where: {
        [Op.or]: [{ user_email: email }, { user_name: username }],
      },
    })
    if (existingUser) {
      throw new Error('Kullanıcı zaten mevcut')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await Users.create({
      user_name: username,
      user_email: email,
      user_password: hashedPassword,
    })
    return newUser
  },

  async login(email, password) {
    const user = await Users.findOne({
      where: {
        user_email: email,
      },
    })
    if (!user) {
      throw new Error('Kullanıcı bulunamadı')
    }

    const passwordMatch = await bcrypt.compare(password, user.user_password)
    if (!passwordMatch) {
      throw new Error('Şifre yanlış')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    return token
  },

  async getUserById(id) {
    const user = await Users.findByPk(id)
    user || alert('Kullanıcı bulunamadı')
    return user
  },
}

module.exports = authService
