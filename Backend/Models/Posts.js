const { DataTypes } = require('sequelize')
const { sequelize } = require('../Services/dbConnect')

const Posts = sequelize.define(
  'Post',
  {
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    post_media: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  },
)

module.exports = Posts
