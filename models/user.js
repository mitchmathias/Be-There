const mongoose = require('mongoose');

const Schema = mongoose.Schema;
require('mongoose-uuid2')(mongoose);

const UserSchema = new Schema({
    name:{
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true},
    email:{
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true},
    password:{
        type: String,
        required: [true, "Cant be blacnk"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index:true},
    city:{
        type: String
    }
})
const User = mongoose.model("User", UserSchema);
module.exports = User;