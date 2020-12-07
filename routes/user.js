// Install required stuffs 
const express = require('express');
const router = express.Router();

// Get the auth controller
const AuthController = require('../controllers/AuthController');

// Get middlewares for extra security when we need to protect routes :)
const areYouAUser = require('../middlewares/authMiddleware')

// Handle Routes
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/forgot-password', AuthController.forgotPassword);

// Export all junk
module.exports = router;
