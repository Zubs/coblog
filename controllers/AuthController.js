/*
	Here we handle all authentication related issues
*/

// Import the model
const User = require('../models/User');

// Display login page
const login = (req, res) => {
	res.render('auth/login');
};

// Handle login
const postLogin = (req, res) => {
	// Code goes here
};

// Render register view
const register = (req, res) => {
	res.render('auth/register');
};

// Store user entered details. Might send mail too 👉👈
const postRegister = (req, res) => {
	// A lot of code goes here
};

// Display page to enter email to get new password
const forgotPassword = (req, res) => {
	res.render('auth/forgot-password');
};

// Get user detail and send mail
const postForgotPassword = (req, res) => {
	// Some code will be here
};

module.exports = {
	login,
	postLogin,
	register,
	postRegister,
	forgotPassword,
	postForgotPassword
};
