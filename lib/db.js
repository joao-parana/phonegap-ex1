var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to mongo
function connect() {
  var username = process.env.MONGOLAB_USER
  var password = process.env.MONGOLAB_PASSWD;
  var address = '@' + process.env.MONGOLAB_HOST 
      + '.mongolab.com:41347/' + process.env.MONGOLAB_DB; 
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
