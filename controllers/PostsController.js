/*
	Posts related issues go here
*/

// Import the model
const Post = require('../models/Post');
const Tag = require('../models/Tag'); // This helps filter by category

// Display landing page with all posts
const index = (req, res) => {
	res.render('posts/index');
};

// Display single post
const show = (req, res) => {
	// Quite some code will be here
	res.render('posts/single-post');
};

// Display all posts from a user
const getPosts = (req, res) => {
	// Quite some code will be here
	res.render('posts/user-posts');
};

module.exports = {
	index,
	show,
	getPosts
};
