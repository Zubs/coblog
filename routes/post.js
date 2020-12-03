// Install required stuffs 
const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/PostsController');

// Handle Routes
router.get('/', PostsController.index);

// Export all junk
module.exports = router;
