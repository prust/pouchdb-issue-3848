var express = require('express');
var app = express();
var PouchDB = require('pouchdb');
var expressPouch = require('express-pouchdb');
var memdown = require('memdown');

var InMemPouchDB = PouchDB.defaults({db: memdown});
 
app.use('/db', expressPouch(InMemPouchDB, {'mode': 'minimumForPouchDB'}));

app.use(express.static('./'));

var server = app.listen(8084, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

new InMemPouchDB('db_csnw');
