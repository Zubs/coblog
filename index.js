// Import packages
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Import routes
const pages = require('./routes/pages');
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


// Link to mongoDB atlas


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

// Register view engine
app.set('view engine', 'ejs');

// Set Up static files
app.use(express.static('public'));

// Using morgan to log instead
app.use(morgan('dev'));

// Respond to routes
app.use('/', post);
app.use('/', pages);
app.use('/', user);

// Incase of 404
app.use((req, res) => {
	res.status(404).render('404', { title: '404'});
});
