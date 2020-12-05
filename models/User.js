// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const UserSchema = new Schema({
	email:{
		type: String,
		required: true,
		unique: true,
		lowercase:true,
	},
	password:{
		type: String,
		required: true,
		minlength: 7
	},
	username:{
		type: String,
		required: true,
		unique: true,
	}
}, {
	timestamp: true
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Make it available all over the app
module.exports = {
	User
};
