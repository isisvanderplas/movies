var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log("requesting Homepage");
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log("web server is now running on port 3000");
});
