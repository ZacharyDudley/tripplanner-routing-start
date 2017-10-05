const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Itinerary = require('./itinerary');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Itinerary.belongsToMany(Hotel, {through: 'itinerary_hotel', foreignKey: 'itineraryId', otherKey: 'hotelId'});
Itinerary.belongsToMany(Restaurant, {through: 'itinerary_restaurant', foreignKey: 'itineraryId', otherKey: 'restaurantId'});
Itinerary.belongsToMany(Activity, {through: 'itinerary_activity', foreignKey: 'itineraryId', otherKey: 'activityId'});

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity,
  Itinerary
};
