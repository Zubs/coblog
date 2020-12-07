
// Import User model
const User = require("../models/User");

//export middleware
module.exports = (req, res, next) => {

    // Check if user exists at all incase the user tries something funny 🤨 
    
  	User.findById(req.session.userId, (error, user) => {
      
    	// If he or she or they were actually crooks send their asses back to login
    	if (error || !user) return res.redirect("/login");
    	next();
  	});
};
