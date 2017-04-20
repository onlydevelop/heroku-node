var express = require('express');
var app = express();

var PORT = 8080;

app.get('/', function (req, res) {
   res.send('It works perfectly in Heroku!');
})

var server = app.listen(PORT, function () {
   var port = server.address().port
   console.log("Listening at port: %s", PORT)
})
