// Import packages
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressSession = require("express-session");

// Import routes
const contact = require('./routes/contact');
const post = require('./routes/post');
const user = require('./routes/user');

// Config
dotenv.config({path: './config/config.env'})

// Initiate the app
const app = express();

// Port
const PORT = process.env.PORT || 3000;
 
// Mode (Who says we can't have some fun 😇) 
 switch(process.env.NODE_ENV){
 case 'development':
	 MODE = '🤨 '
	 break;
 case 'production':
	  MODE =  ' 😋'
	  break
}

// Variable to store get db uri from environment
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log(`Connected to DB and listening for requests on port ${PORT}.
		Note ${MODE} all this is in ${process.env.NODE_ENV} mode.`);
		app.listen(PORT);
	})  
	.catch((err) => console.log(err));

// Using morgan to log instead
app.use(morgan('dev'));

// Initiate Session
app.use(
	expressSession({
	  	secret: "keyboard cat",
	})
);

// Logged in for navbar routes protection :)
global.loggedIn = null;
  
app.use("*", (req, res, next) => {
	loggedIn = req.session.userId;
	next();
});

// Respond to routes
app.use('/api/posts', post);
app.use('/api/contact', contact);
app.use('/api/', user);

// Incase of 404
app.use((req, res) => {
	res.status(404).render('404', { title: '404'});
});
