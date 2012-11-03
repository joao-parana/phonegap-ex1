var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to mongo
function connect() {
  var username = "pg-01"
  var password = "gap604";
  var address = '@ds041347.mongolab.com:41347/phonegap'; 
  var url = 'mongodb://' + username + ':' + password + address;
  console.log('Executando o metodo connect');
  mongoose.connect(url);
}

function disconnect() {
  console.log('Executando o metodo disconnect');	
  mongoose.disconnect()
}

// Connect to cloud database
connect();

// https://api.mongolab.com/api/1/databases?apiKey=5093beabe4b010d72c56222b
