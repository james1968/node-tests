/*jshint esversion: 6*/
var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	// Check if email already exists
	db.saveUser({email, password});
	// Send welcome email
};
