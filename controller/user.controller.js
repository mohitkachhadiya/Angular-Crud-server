var { User } = require('../models/user.model');
var userController = {};
var ObjectId = require('mongoose').Types.ObjectId;

userController.getUsers = function(req, res){
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error of getUsers :' + JSON.stringify(err, undefined, 2)); }
    });
}

userController.getUserById = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Id not found: ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error of getUserById :' + JSON.stringify(err, undefined, 2)); }
    });
}

userController.addUser = function (req, res) {
    var emp = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: req.body.password,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error of addUser :' + JSON.stringify(err, undefined, 2)); }
    });
}

userController.updateUserById = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Id not found : ${req.params.id}`);
    var emp = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        password: req.body.password,
    };
    User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in updateUserById :' + JSON.stringify(err, undefined, 2)); }
    });   
}

userController.deleteUserById = function (req, res) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`Id not found: ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in deleteUserById :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports = userController;