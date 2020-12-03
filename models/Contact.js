// Import things I need to import
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Schema
const ContactSchema = new Schema({
	from: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	subject: {
		type: String
	},
	name: {
		type: String
	}
}, {
	timestamps: true
});

// Create the model
const Contact = mongoose.model('Contact', ContactSchema);

// Make it available all over the app
module.exports = {
	Contact
};
