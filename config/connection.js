var mysql           = require('mysql');
var connection      = mysql.createConnection({
    port: 3306,
    host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'weq3ouh7rhigyyp0',
    password: 'btysjfq9465l3y5g',
    database: 'keg43p251cr82uro'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;