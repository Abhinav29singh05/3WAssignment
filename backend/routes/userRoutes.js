const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Corrected routes
router.get('/', userController.getUsers);
router.post('/', userController.addUser);
router.get('/leaderboard', userController.getLeaderboard);
router.delete('/:id', userController.deleteUser);

module.exports = router; 