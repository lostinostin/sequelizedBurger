var connection 			= require('../config/connection.js');

function printQuestionMarks(val){
	var arr = [];
	for (var i=0; i<val.length; i++){
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
}

// This object is a template for the model
var orm = {

	selectAll: function(table, callback){
		var select = 'SELECT * FROM ' + table;

		connection.query(select, function(err, res) {

            callback(res);

        });
	},

	insertOne: function(table, col, val, callback){
		// var insert = 'INSERT INTO ' + table + ' (' + col.toString() + ') VALUES (?)';

		connection.query('INSERT INTO ' + table + ' (' + col.toString() + ') VALUES (?)', [val], function(err, res){
			if (err) throw err;
			callback(res);
		});
	},

	// This method updates the devoured value from false to true, and sets the timestamp
	updateOne: function(table, colValObj, condition, callback){
		var update = 'UPDATE ' + table + ' SET ' + objToSql(colValObj) +  ' WHERE ' + condition;
		connection.query(update, function(err, res){
			if (err) throw err;
			callback(res);
		})
	}

};
module.exports = orm;