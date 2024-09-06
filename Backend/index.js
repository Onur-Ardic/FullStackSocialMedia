require('dotenv').config()
const { dbConnect, sequelize } = require('./Services/dbConnect')

const User = require('./Models/Users')
const Post = require('./Models/Posts')

User.hasMany(Post)
Post.belongsTo(User)

const initDatabase = async () => {
  try {
    await dbConnect()
    await sequelize.sync({ alter: true })
    console.log('Database connected and synced')
  } catch (error) {
    console.log(error)
  }
}

initDatabase()
