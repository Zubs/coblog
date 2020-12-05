// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	
	// More code to be added soon
}, {
	timestamps: true
});

// Create the model
const Post = mongoose.model('Post', PostSchema);

// Make it available all over the app
module.exports = {
	Post
};
