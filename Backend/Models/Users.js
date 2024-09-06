const { DataTypes } = require('sequelize')
const { sequelize } = require('../Services/dbConnect')

const Users = sequelize.define(
  'Users',
  {
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
  },
  {
    timestamps: false,
  },
)

module.exports = Users
