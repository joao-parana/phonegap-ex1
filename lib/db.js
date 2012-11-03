var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to mongo
function connect() {
  // console.log('process.env.PATH=' + process.env.PATH);
  envCopy = {};
  var regExp = /^MONGOLAB_/
  for (e in process.env) {
	envCopy[e] = process.env[e];
	if (regExp.test(e)) {
	  console.log('process.env[' + e + '] = ' + process.env[e]);
    }
  }
  
  var username = process.env.MONGOLAB_USER;
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
