require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnect, sequelize } = require('./Services/dbConnect')
const userRoutes = require('./Routes/User')
const postRoutes = require('./Routes/Post')

const User = require('./Models/Users')
const Post = require('./Models/Posts')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', userRoutes)
app.use('/posts', postRoutes)

User.hasMany(Post)
Post.belongsTo(User)

const initDatabase = async () => {
  try {
    await dbConnect()
    await sequelize.sync({ alter: true })
    console.log('Veritabanı bağlandı ve senkronize edildi')

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda çalışıyor`)
    })
  } catch (error) {
    console.log('Veritabanı başlatma hatası:', error)
  }
}

initDatabase()
