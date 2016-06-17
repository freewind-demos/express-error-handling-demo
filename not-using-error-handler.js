var express = require('express');
var fs = require('fs');
var app = express();

app.get("/file1", function (req, res, next) {
  fs.readFile("./file1", "utf-8", function (err, data) {
    if (err) {
      return res.status(500).send("can't find the file");
    }
    res.send(data);
  });
});

app.get("/file2", function (req, res, next) {
  fs.readFile("./file2", "utf-8", function (err, data) {
    if (err) {
      return res.status(500).send("can't find the file");
    }
    res.send(data);
  });
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port);
});