// require in express, and set up routing for it, and bring in the burger.js model file
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// the index route if one does not type index
router.get('/', function(req, res) {
	res.redirect('/index');
});

// add a 'index' endpoint that gets all the burgers then passes the burgers as an object.
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// add a insertOne that posts the burgers created by the user and redirects back to index after completion.
router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

// add a updateOne route that changes the status of the burger from being uneaten to eaten then redirects to the index endpoint
router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

// export the router (controller) back to the server
module.exports = router;
