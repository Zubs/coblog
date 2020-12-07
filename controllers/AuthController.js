/*
	Here we handle all authentication related issues
*/

// Import the model
const User = require('../models/User');

// Handle all errors
const handleErrors = (err) => {
	console.log(err.message, err.code);
	let errors = { email: '', password: '' };
  
	// Incorrect email error
	if (err.message === 'Incorrect email') {
	  errors.email = 'This email is not registered';
	}
  
	// Incorrect password error
	if (err.message === 'Incorrect password') {
	  errors.password = 'Your password is incorrect';
	}
  
	//Email already exists error
	if (err.code === 11000) {
	  errors.email = 'That email is already registered';
	  return errors;
	}
  
	// Validation errors from User model
	if (err.message.includes('user validation failed')) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}
  
	return errors;
};

// Login New User
const login = (req, res) => {

	// Get email and password from request
	const { email, password } = req.body;

	try {

		// Try logging in the user. NOTE: The 'login' is a static function already defined in User model
	  	const user = await User.login(email, password);

	  	// If we get back the user. NOTE: Double check not really needed but just to be sure :)
	 	if(user){

			// Login the user
			req.session.userId = user._id;

			// Send the user response
			res.status(200).json({ user: user._id });
	 	}
	} 
	catch (err) {
	  const errors = handleErrors(err);
	  res.status(400).json({ errors });
	}
};

// Register New User
const register = (req, res) => {

	// Get email and password from request
	const { email, password } = req.body;

	try {

		// Try creating a new user
	  	const user = await User.create({ email, password });

	  	//If user exists :). NOTE: Double check not really needed but just to be sure :)
	 	if (user) {

			// set the session Id equal to user Id so user will be logged in.
			req.session.userId = user._id;

			// Send user in response 
			res.status(201).json({ user: user._id });
	 	}
	}

	// Catch errors
	catch(err) {

		// If there are errors trigger the handleErrors function  and save it in an errors variable :)
	  	const errors = handleErrors(err);

	  	// Send the errors response 
	  	res.status(400).json({ errors });
	}
}

//TODO: Forgot password logic
const forgotPassword = (req, res) => {
	// Some code will be here
};

module.exports = {
	login,
	register,
	forgotPassword
};
