var express = require('express');
var fs = require("fs");
var app = express();

app.get('/', function (req, res, next) {
  try {
    throw new Error("my-error");
  } catch (err) {
    console.log("-------------- err thrown: " + err);
    next(err);
  }
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error stack printed in custom error handler');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});