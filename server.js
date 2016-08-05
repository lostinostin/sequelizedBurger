var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));

var models = require('./models');
var sha1 = require('sha1');
console.log(models);

var PORT = process.env.PORT || 3000;
//==============================================//
//						//
//		Routes				//
//						//
//==============================================//

app.get('/signup', function(req, res){
   res.render('users/signup'); 
});

app.post('/user/create', function(req, res){
    // console.log(req.body);
    // models.Users.findAll({where: {email: req.body.newemail}})
    // .then(function(users){
    //     console.log(JSON.stringify(users));
    // });
    models.Users.create({
        name: req.body.newname,
        email: req.body.newemail,
        password: sha1(req.body.newpassword)
    });
    res.send('Thank you for signing up');
});

//==============================================//
//                                              //
//              END ROUTES			//
//                                              //
//==============================================// 


app.listen(PORT, function(){
    console.log('Magic happens on port: ' + PORT);
});
