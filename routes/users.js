var express = require('express');

var userController = require('../controllers/usersController');

module.exports = function (app) {

//var router = express.Router();

app.get('/users', userController.helloWorld);
 // router.get('/items/:id', itemsController.getItem);
 // router.post('/items', itemsController.saveItem);
// return router;
};
