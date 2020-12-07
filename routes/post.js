// Install required stuffs 
const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/PostsController');

// Handle Routes
router.get('/', PostsController.index);
router.post('/', PostsController.store);
router.get('/:id', PostsController.show);
router.delete('/:id', PostsController.delete);

// Export all junk
module.exports = router;
