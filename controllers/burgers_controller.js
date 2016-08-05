var express 			= require('express');
var models				= require('./../models');
var router 				= express.Router();
models.burgers.sync();

//routes go here
router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req,res){
	models.burgers.findAll().then(function(result){
		object = {burgers:result}
		res.render('index', object)
	});
});

// router.post('/burgers/add', function(req,res){
// 	burger.insertOne(('burger_name, devoured'), [req.body.name, false], function(data){
// 		res.redirect('/burgers');
// 	});
// });

// router.put('/burgers/update/:id', function(req,res) {
// 	var condition = 'id = ' + req.params.id;

// 	console.log('condition', condition);

// 	burger.updateOne({'devoured' : req.body.devoured}, condition, function(data){
// 		res.redirect('/burgers');
// 	});
// });

module.exports = router;
