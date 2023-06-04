const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

// Define admin routes
router.get('/analytics', adminController.getAdminAnalytics);

module.exports = router;
