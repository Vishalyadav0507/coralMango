const express = require('express');
const router = express.Router();
const restaurantController = require('../controller/restaurant');

// Define restaurant routes
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);

module.exports = router;
