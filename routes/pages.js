// Install required stuffs 
const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');

// Handle Routes
router.get('/about', PagesController.about);
router.get('/contact', PagesController.contact);
router.post('/contact', PagesController.postContact);

// Export all junk
module.exports = router;
