var express = require('express');

var userController = require('../controller/user.controller');

var router = express.Router();

router.get('/getUsers', userController.getUsers);
router.get('/getUserById/:id', userController.getUserById);
router.post('/addUser', userController.addUser);
router.put('/updateUserById/:id', userController.updateUserById);
router.delete('/deleteUserById/:id', userController.deleteUserById);

module.exports = router;

