// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const UserSchema = new Schema({}, {
	timestamp: true
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Make it available all over the app
module.exports = {
	User
};
