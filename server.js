var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// This line is responsible for serving up static content.
app.use(express.static(process.cwd() + '/public')); //may be a problem***

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 3333;
app.listen(port);