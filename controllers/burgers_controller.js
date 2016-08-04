var express 			= require('express');
var methodOverride 		= require('method-override');
var bodyParser			= require('body-parser');
var burger				= require('../models/burgers.js');
var router 				= express.Router();

//routes go here
router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req,res){
	burger.selectAll(function(data){
		var handlebarsObj = {burgers : data}
		console.log(handlebarsObj);
		res.render('index', handlebarsObj);
	});
});

router.post('/burgers/add', function(req,res){
	burger.insertOne(('burger_name, devoured'), [req.body.name, false], function(data){
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;
