// Install required stuffs 
const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

// Handle Routes
router.get('/contact', ContactController.index);
router.post('/contact', ContactController.store);
router.get('/contact/:id', ContactController.show);
router.delete('/contact/:id', ContactController.delete);

// Export all junk
module.exports = router;
