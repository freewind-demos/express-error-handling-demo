var express = require('express');
var fs = require("fs");
var app = express();

app.get('/', function (req, res, next) {
  console.log("In handler 1");
  next();
}, function (req, res, next) {
  console.log("In handler 2");
  next('route'); // not an error, `route` string means to skip next handlers
}, function (req, res, next) {
  console.log("This handler should not be invoked");
  next();
}, function (req, res) {
  console.log("This handler should not be invoked");
  res.send("OK");
});

// This is not an error handler, since there is no `err` parameter
app.use(function (req, res, next) {
  res.status(200).send('Normal global handler');
  next();
});

// This is an error handler, since there is `err`
app.use(function (err, req, res, next) {
  console.log("Custom error handler should not be invoked");
  res.status(500).send('Custom error handler');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});