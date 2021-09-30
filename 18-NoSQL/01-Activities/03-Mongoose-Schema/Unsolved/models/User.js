const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	// Add these four attributes to your schema: username, password, email, userCreated
	// YOUR CODE HERE
	//
	username: {
		type: String,
		required: 'Username is required',
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minLength: [6, 'You need at least 6 characters for a valid password'],
	},
	email: {
		email: {
			type: String,
			unique: true,
			required: true,
			match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
		},
		userCreated: {
			type: Date,
			default: Date.now,
		},
	},
});

const User = model('User', UserSchema);

module.exports = User;
