
var express = require('express');
var bodyParser = require('body-parser');

var flightRoute = require('./routes/flightRoute');

var app = express();
var port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//common unexpeted error
app.use(function (err, req, res, next) {
  //console.error(err.stack)
  res.status(500).send(JSON.stringify({
      "error": "unexpected error",
  }))  
})

//flights Router
app.use('/', flightRoute);

var server = app.listen(port);
console.log('start to listening ' + port);

module.exports = server;
