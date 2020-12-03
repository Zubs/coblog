// Install required stuffs 
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Handle Routes
router.get('/login', AuthController.login);
router.post('/login', AuthController.postLogin);
router.get('/register', AuthController.register);
router.post('/register', AuthController.register);
router.get('/forgot-password', AuthController.forgotPassword);
router.post('/forgot-password', AuthController.postForgotPassword);

// Export all junk
module.exports = router;
