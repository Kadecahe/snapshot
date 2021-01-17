const db = require('../db')
const Sequelize = require('sequelize')

const Image = db.define('image', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  //Supports multiple tags. Could also be it's own table if I were to scale the app
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  //For Option to sell
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  //will use with Multer to store the images to the public folder
  imageUpload: {
    type: Sequelize.BLOB('long'),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Image
