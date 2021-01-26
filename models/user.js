const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	username: { 
		type: String,
		 unique: true,
		 lowercase: true,
		 required: [true, " Can't be blank"],
		 match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
		 },
	password: { 
		type: String,
		 unique: false,
		 required: true, 
		},
	email:{
		type: String,
		lowercase: true,
		required: [true, "can't be blank"],
		match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true},
    firstName:{
        type: String,
        lowercase: true,
        required: true
	},
	lastName:{
        type: String,
        lowercase: true,
        required: true
    },	
})

userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}


userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('No password')
		next()
	} else {
		console.log('pre-save');
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User;