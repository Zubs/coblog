// Import packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Import routes
const pages = require('./routes/pages');
const post = require('./routes/post');
const user = require('./routes/user');

// Initiate the app
const app = express();

// Link to mongoDB atlas
const dbURI = 'mongodb+srv://young:ethene20@cluster0.hgbre.mongodb.net/coblog?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then((result) => {
	console.log('Connected to DB and listening for requests on PORT 3000');
	app.listen(3000);
})
.catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Set Up static files
app.use(express.static('public'));

// Using morgan to log instead
app.use(morgan('dev'));

// Respond to routes
app.use('/', posts);
app.use('/', pages);
app.use('/', user);

// Incase of 404
app.use((req, res) => {
	res.status(404).render('404', { title: '404'});
});
