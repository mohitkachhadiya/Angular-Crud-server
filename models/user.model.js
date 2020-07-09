const mongoose = require('mongoose');

var User = mongoose.model('User', {
    firstName: { type: String },
    lastName: { type: String },
    mobileNo: { type: Number },
    email: { type: String },
    password: { type: String},
});

module.exports = { User };