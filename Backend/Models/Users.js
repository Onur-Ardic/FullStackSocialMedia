const { DataTypes } = require('sequelize')
const dbConnect = require('../Services/dbConnect')

const Users = dbConnect.define('Users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_posts: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
})

module.exports = Users
