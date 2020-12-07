/*
	Posts related issues go here
*/

// Import the model
const Post = require('../models/Post');

// Display landing page with all posts
const index = (req, res) => {
	Post.find()
		.sort({createdAt: -1})
		.then((result) => {
			res.json({ result })
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Unable To Fetch Posts At This Time'
			})
		})
};

// Display single post
const show = (req, res) => {

	// Fetch the post id
	const id = req.params.id;

	// Find by the id
	Post.findById(id)
		.then((result) => {
			res.json({ result })
		})
		.catch((err) => {
			res.status(404).json({
				message: 'Post Not Found'
			})
		})
};

// Create new post
const store = (req, res) => {

	// Get user input
	const { title, body, tag } = req.body;

	// Check for values in title field
	if (!title) {
		res.json({
			message: 'Please Enter Title'
		})
	};

	// Check for values in body field
	if (!body) {
		res.json({
			message: 'Please Enter Post Body'
		})
	};

	const post = new Post({ title, body, tag });
	post.save()
		.then((result) => {
			res.json({ result })
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Unable To Save Post At This Time'
			})
		})
};

const delete = (res, res) => {

	// Fetch post id
	const id = req.params.id;

	// Delete by id
	Post.findByIdAndDelete(id)
		.then(result => {
			res.json({
				message: 'Post Deleted Successfully'
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(404).json({
				message: 'Post Not Found And Cannot Be Deleted'
			})
		})
};

// Display all posts from a user
const getPosts = (req, res) => {
	// Quite some code will be here
	res.render('posts/user-posts');
};

module.exports = {
	index,
	show,
	store,
	delete,
	getPosts
};
