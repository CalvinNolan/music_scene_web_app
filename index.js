var express = require('express');
var app = express();
app.use(express.static('public'));

//Html redirect requests.
app.get('/', function(req, res) {
	res.render('index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('404: This page could not be found!');
  err.status = 404;
  next(err);
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});