const express = require('express');
const router = express.Router();
const reviewController = require('../controller/review');

// Define review routes
router.post('/', reviewController.submitReview);
router.get('/:id', reviewController.getReviewsByRestaurantId);

module.exports = router;
