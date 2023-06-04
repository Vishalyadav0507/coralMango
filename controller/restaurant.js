const Restaurant = require('../models/restaurants');

// Get a list of all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get details of a specific restaurant by ID

exports.getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findByPk(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


