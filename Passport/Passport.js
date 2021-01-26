const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username'
	},
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			console.log(username, user, err)
			if (err) {
				return done(err)
			}
			if (!user) {
				console.log('not found')
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy