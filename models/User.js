// Import things I need to import
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const {isEmail} = require('validator');

// Schema I guess to further abstract code 😼 
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
		default: 'New user',
		unique: true,
	}
}, {
	timestamp: true
});




// Before saving user hash and salt password 
UserSchema.pre('save', async function(next) {
	const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
  });


// Login User
  UserSchema.statics.login = async function(email, password) {

	// Check if user exists
	const user = await this.findOne({ email });

	// If the user exists :)
	if (user) {


		// Compare the passwords
	  const auth = await bcrypt.compare(password, user.password);

	  // If everything is successful return the user 
	  if (auth) {
		return user;
	  }


	  // custom error message for incorrect password
	  // We will search for it  in error object if an error occurs :(
	  throw Error('Incorrect password');
	  
	}

	
	 // custom error message for incorrect email address
	 // We will search for it  in error object if an error occurs :(
	throw Error('Incorrect email');
  };
  
 
// Create the model
const User = mongoose.model('User', UserSchema);

// Make it available all over the app
module.exports = {
	User
};
