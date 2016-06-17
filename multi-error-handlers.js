var express = require('express');
var fs = require("fs");
var app = express();

app.get('/normal-error', function (req, res, next) {
  next("this-is-a-normal-error");
});

app.get('/very-bad-error', function (req, res, next) {
  next({
    veryBad: true,
    message: "this-is-a-very-bad-error"
  });
});

app.use(function (err, req, res, next) {
  if (err.veryBad) {
    return next(err);
  }
  res.status(500).send('A normal error');
});

app.use(function (err, req, res, next) {
  res.status(500).send('A very bad error');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});