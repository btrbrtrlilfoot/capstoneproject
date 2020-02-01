const Sequelize = require('sequelize')
const db = require('../db')

const Auction = db.define('auction', {
    status: {
        type: Sequelize.STRING,
        validate:   {
            isIn:   [['rejected', 'pending', 'accepted', 'successful']]
        }
    }
})


module.exports = Auction
