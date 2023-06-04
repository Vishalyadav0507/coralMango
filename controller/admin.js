const Restaurant = require('../models/restaurants');
const Review = require('../models/review');

// Get analytics data for the admin dashboard
exports.getAdminAnalytics = async (req, res) => {
    try {
        let { adminID }=req.body

        const totalReviews = await Review.count();

        res.json({ totalReviews});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
