// Install required stuffs 
const express = require('express');
const router = express.Router();

// Get the auth controller
const AuthController = require('../controllers/AuthController');


// Get middlewares for extra security when we need to protect routes :)
const areYouAUser = require('../middlewares/authMiddleware')



// Handle Routes
router.get('/login', AuthController.login);
router.post('/login', AuthController.postLogin);
router.get('/register', AuthController.register);
router.post('/register', AuthController.register);
router.get('/forgot-password', AuthController.forgotPassword);
router.post('/forgot-password', AuthController.postForgotPassword);

// Export all junk
module.exports = router;
