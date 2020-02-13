const router = require("express").Router();
const { User, Product } = require("../db/models");
require("../../secrets");
const gMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAPS_API
});

module.exports = router;

router.put("/sort", async (req, res, next) => {
  try {
    const origins = req.body.origins;
    const bids = req.body.bids;
    let result = [];
    const promise = new Promise(function(resolve, reject) {
      for (let bid of bids) {
        gMapsClient.distanceMatrix(
          {
            origins: [origins],
            destinations: [bid.user.location]
          },
          (err, response) => {
            if (!err) {
              console.log("got distance");
              bid.distance = response.json.rows[0].elements[0].distance.value;
              result.push(bid);
              if (result.length === bids.length) {
                resolve();
              }
            }
          }
        );
      }
    });

    promise.finally(() => {
      res.json(result);
    });
  } catch (error) {
    next(error);
  }
});

router.post("/reverse", async (req, res, next) => {
  try {
    const latlng = req.body.latlng;
    gMapsClient.reverseGeocode(
      {
        latlng: latlng
      },
      function(err, response) {
        if (!err) {
          console.log("this is response", response.json);
          res.json(response.json.results[0].formatted_address);
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

router.post("/geocode", async (req, res, next) => {
  try {
    const address = req.body.address;
    gMapsClient.geocode(
      {
        address: address
      },
      function(err, response) {
        if (!err) {
          const latlng = [
            response.json.results[0].geometry.location.lng,
            response.json.results[0].geometry.location.lng
          ];
          console.log("this is response", response.json);
          res.json(latlng);
        }
      }
    );
  } catch (error) {
    next(error);
  }
});
