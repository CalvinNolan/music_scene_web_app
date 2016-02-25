var express = require('express');
var app = express();
app.use(express.static('public'));

//Html redirect requests.
app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});