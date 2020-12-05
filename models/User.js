// Import things I need to import
const mongoose = require('mongoose');
const {isEmail} = require('validator');
const Schema = mongoose.Schema;


// Create the Schema
const UserSchema = new Schema({
	email:{
		type: String,
		required: [true,'Please enter an email.'],
		unique: true,
		lowercase:true,
		validate: [isEmail, 'Please enter a valid email address.'],
	},
	password:{
		type: String,
		required:  [true,'Please enter a password.'],
		minlength: [7, 'The password must be more than seven characters.']
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
