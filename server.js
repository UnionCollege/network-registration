var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.locals.sitename = 'network-registration';

app.get('/', function(req, res){
  res.render('index');
})

var port = process.env.PORT || 3000;
var address = process.env.IP || '127.0.0.1';

app.listen(port, address, function(){
  console.log('%s listening at http://%s:%s', app.locals.sitename, address, port);
});
