var orm 			= require('../config/orm.js');

var burger = {
	selectAll: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},

	insertOne: function(col, val, callback){
		orm.insertOne('burgers', col, val, function(res){
			callback(res);
		});
	},

	updateOne: function(colValObj, condition, cb) {
		orm.updateOne('burgers', colValObj, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;