const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name:   {
        type: Sequelize.STRING,
        allowNull: false,
        validate:   {
            notEmpty: true
        }
    },
    kind: {
        type: Sequelize.STRING,
        validate:   {
            isIn: [['service','item']]
        }
    },
    type: {
      type: Sequelize.STRING,
      validate:   {
          isIn: [['offer','auction (open)', 'auction (closed)']]
      }
  }
})
module.exports = Product
