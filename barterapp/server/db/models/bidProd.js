const Sequelize = require('sequelize')
const db = require('../db')

const BidProduct = db.define('bidProduct', {  
    status: {
        type: Sequelize.STRING,
        validate:   {
            isIn:   [['open','cancelled','successful']]
        }
    }
})


module.exports = BidProduct