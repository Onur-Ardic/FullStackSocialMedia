const { DataTypes } = require('sequelize')
const dbConnect = require('../Services/dbConnect')

const Posts = dbConnect.define('Post', {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  post_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  post_content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  post_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  post_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})
