/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , User = require('./models/User.js')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

app.configure(function(){
  app.set('port', process.env.NODE_PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/sayhello', function(req, res){
  fs.readFile('./form.html', function(err, contents) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(contents, 'utf-8');
    }
  });  
});

app.get('/form', function(req, res){
  fs.readFile('./form.html', function(err, contents) {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(contents, 'utf-8');
    }
  });  
});

app.post('/sayhello', function(req, res){
  res.send('Hello ' + req.body.name);
});

app.get('/users', User.list);

app.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.addUser(username, password, function(err, user) {
	  console.log('Executando callback do metodo User.addUser');
	  
	  if (err) throw err;
	  
	  console.log(user);
	  res.redirect('/form');
  });
});

var misc = require('./util/misc');
var calc = new misc.Calc();
console.log("Adding %d to 10 gives us %d", calc.x, calc.addX(10));

// throw "Finalizando" 
	  
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var io = require('socket.io').listen(81);

io.sockets.on('connection', function (socket) {
  socket.emit('news-from-server', { hello: 'iniciando. Primeira mensagem do servidor' });
  socket.on('event-from-client', function (data) {
    console.log(data);
  });
  socket.on('log-event', function (data) {
    console.log(data);
  });  
});
