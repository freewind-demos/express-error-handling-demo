var express = require('express');
var fs = require("fs");
var app = express();

app.get('/', function (req, res, next) {
  fs.readFile("./package.json", "utf-8", function (err, data1) {
    if (err) return next(err);

    fs.readFile("./file2", "utf-8", function (err, data2) {
      if (err) return next(err);

      res.send(data1 + data2);
    });
  });
});


app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send('Some errors happened, please see the log on server');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});