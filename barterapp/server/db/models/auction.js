const Sequelize = require('sequelize')
const db = require('../db')

const Auction = db.define('auction', {
    status: {
        type: Sequelize.STRING,
        validate:   {
            isIn:   [['open','cancelled','successful']]
        }
    }
})


module.exports = Auction
