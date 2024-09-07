const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('../Models/Users')
const { Op } = require('sequelize')

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
}

module.exports = authService
