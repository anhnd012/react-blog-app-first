const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter username..."],
        unique: true,
        mixLength: [6, "Please type exceed 6 characters"]
    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email address'],
        unique: true,
    },
    password: {
        type: String,
        require: [true,"Please enter a valid password"],
        mixLength: [6, "Please type more than"]
    },
    profilePic: {
        type: String,
        default: ""
    }
},
{timestamps: true})

module.exports = mongoose.model('User', userSchema)