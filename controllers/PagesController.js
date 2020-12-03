/*
	Static pages are rendered here
*/

// Import the model
const Contact = require('../models/Contact');

// Display about page
const about = (req, res) => {
	res.render('pages.about');
};

// Display contact page
const contact = (req, res) => {
	res.render('pages.user-posts');
};

// Store contact here
const postContact = (req, res) => {
	// Code goes here
};

module.exports = {
	about,
	contact,
	postContact
};
