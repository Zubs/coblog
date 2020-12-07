// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const PostSchema = new Schema({
	title: {
		type: String,
		required: [true, 'You have to give your write-up a title.']
	},
	body: {
		type: String,
		required: [true, 'Your write-up must have some content.']
	},
	uid: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "User",
		required: true,
	},
	tag: {
		type: Array,
		required: false,
		unique: false,
	}
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
