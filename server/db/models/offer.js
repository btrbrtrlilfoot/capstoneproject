const Sequelize = require("sequelize");
const db = require("../db");

const Offer = db.define("offer", {
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [["rejected", "pending", "accepted", "successful"]]
    }
  }
});

module.exports = Offer;
