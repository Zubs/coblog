/*
	Here we store the contact message
*/

// Import the model
const Contact = require('../models/Contact');

// Store user entered details
const contact = (req, res) => {

	// Get sent data
	var { from, body, subject, name } = req.body;

	// Check if sender email is present
	if (!from) {

		// Return error message if it is empty
		res.json({
			message: 'Sender Email Cannot Be Empty!'
		});
	};

	// Check if message body is empty
	if (!body) {

		// Return error message if it is empty
		res.json({
			message: 'Contact Message Cannot Be Empty'
		});
	}

	// Check if message subject is empty
	if (!subject) {

		// Store as default if it is empty
		subject = 'New Message';
	}

	// Check if sender has name
	if (!name) {

		// Make the sender anonymous
		name = 'Anonymous';
	}

	const message = new Contact({ from, body, subject, name });
	message.save()
		.then((result) => {
			res.json({ req.body })
		})
		.catch((err) => {
			console.log(err)
			res.json({
				message: 'Unable To Save Message 😢'
			})
		})
};

// Fetch all messages
const index = (req, res) => {
	Contact.find()
		.sort({createdAt: -1})
		.then((result) => {
			res.json({ result }) // I'm not too sure of this
		})
		.catch((err) => {
			console.log(err)
			res.status(201).json({
				message: 'Unable To Fetch Messages At This Time'
			})
		})
};

// Show single message
const show = (req, res) => {

	// Fetch the message id
	const id = req.params.id;

	// Find by the id
	Contact.findById(id)
		.then((result) => {
			res.json({ result })
		})
		.catch((err) => {
			res.status(404).json({
				message: 'Message Not Found'
			})
		})
};

// Delete a message
const delete = (req, res) => {

	// Fetch message id
	const id = req.params.id;

	// Delete by id
	Contact.findByIdAndDelete(id)
		.then(result => {
			res.json({
				message: 'Message Deleted Successfully'
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(404).json({
				message: 'Message Not Found And Cannot Be Deleted'
			})
		})
};

module.exports = {
	index,
	show,
	store,
	delete
};
