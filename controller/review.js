const Review = require('../models/review');

// Submit a new review for a restaurant anonymously
exports.submitReview = async (req, res) => {
   
    const { restaurantId, reviewText } = req.body;
    try {
    
        const review = await Review.create({
            restaurant_id: restaurantId,
            review_text: reviewText,
        });
        res.status(200).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json(
            { message: 'Server Error' }
        );
    }
};

// Get reviews of a specific restaurant by ID

exports.getReviewsByRestaurantId = async (req, res) => {
    const { id } = req.params;
    try {

        const reviews = await Review.findAll({ where: { restaurant_id: id } });
       
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json(
            { message: 'Server Error' }
        );
    }
};
