const Sequelize = require('sequelize')
const db = require('../db')

const OfferProduct = db.define('offerProduct', {  
    status: {
        type: Sequelize.STRING,
        validate:   {
            isIn:   [['open','cancelled','accepted']]
        }
    }
})


module.exports = OfferProduct