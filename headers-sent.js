var express = require('express');
var fs = require('fs');
var app = express();

app.get('/error1', function (req, res, next) {
  res.status(500); // header has been set
  res.send("send error directly");
  next("my-error1");
});

app.get("/error2", function (req, res, next) {
  next("my-error2");
});

app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send("Handled by custom error handler");
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});