const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claimController');

// Corrected route
router.post('/', claimController.claimPoints);

module.exports = router; 