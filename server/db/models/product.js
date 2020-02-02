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
    status: {
        type: Sequelize.STRING,
        validate:   {
            isIn: [['auction (open)', 'auction (closed)','offer','pending','completed']]
        }
    },
    kind: {
        type: Sequelize.STRING,
        validate:   {
            isIn: [['service','item']]
        }
    }
})
module.exports = Product
