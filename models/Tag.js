// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const TagSchema = new Schema({
	category: {
		type: String,
		required: true, // could be false
	},
	postid: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Post",
		required: true, // could be made false esp. if the category is non-existent abi ??
	  },

}, {
	timestamp: true
});

// Create the model
const Tag = mongoose.model('Tag', TagSchema);

// Make it available all over the app
module.exports = {
	Tag
};
