// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const TagSchema = new Schema({}, {
	timestamp: true
});

// Create the model
const Tag = mongoose.model('Tag', TagSchema);

// Make it available all over the app
module.exports = {
	Tag
};
