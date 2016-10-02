var express = require('express');

var idxController = require('../controllers/indexController');

module.exports = function (app) {

app.get('/', idxController.default);


// router.get('/', function(req, res) {
// 		idxController.default(req, res);
//     });

 // router.get('/items/:id', itemsController.getItem);
 // router.post('/items', itemsController.saveItem);
};
