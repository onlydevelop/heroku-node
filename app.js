var express = require('express');
var app = express();

var PORT = 3000;

app.get('/', function (req, res) {
   res.send('It works perfectly in Heroku!');
})

app.get('/books', function (req, res) {
   res.send('Shows list of books!');
})

var server = app.listen(process.env.PORT || PORT, function () {
   var port = server.address().port
   console.log("Listening at port: %s", port)
})
