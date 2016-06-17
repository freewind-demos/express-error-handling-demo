var express = require('express');
var fs = require('fs');
var app = express();

app.get('/custom-error', function (req, res, next) {
  next("this is an error, and will be logged on server side and sent to client by express' default error handler");
});

app.get("/file-error", function (req, res, next) {
  fs.readFile("an-non-existent-file", "utf-8", function (err, data) {
    if (err) return next(err);
    res.send(data);
  });
});

app.get("/throw-error", function (req, res, next) {
  fs.readFile("an-non-existent-file", "utf-8", function (err, data) {
    if (err) throw err; // !!!!
    res.send(data);
  });
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});