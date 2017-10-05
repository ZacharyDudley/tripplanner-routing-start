const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Itinerary = require('../models').Itinerary;


router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] }),
    Itinerary.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities, itineraries]) => {
      res.json({
        hotels,
        restaurants,
        activities,
        itineraries
      });
      // next();
    })
    .catch(next);
});

router.get('/itineraries/:itinerary_id', (req, res, next) => {
  Itinerary.findById(req.params.itinerary_id, { include: [{ all: true, nested: true }] })
  .then( returnedItinerary => {
    res.json(returnedItinerary)
  })
  .catch(next);
});

router.post('/itineraries/', (req, res) => {

})

module.exports = router;
