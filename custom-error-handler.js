var express = require('express');
var fs = require("fs");
var app = express();

app.get('/', function (req, res, next) {
  fs.readFile("./an-non-existent-file", "utf-8", function (err, data) {
    if (err) return next(err); // !!!!
    res.send(data);
  });
});

app.use(function (err, req, res, next) {
  console.dir(err);
  res.status(500).send('Custom error handler');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});