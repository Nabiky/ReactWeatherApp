// var express = require('express');
//
// // Create our app
// var app = express();
//
// app.use(express.static('public'));
//
// app.listen(3001, function () {
//   console.log('Express server is up on port 3001');
// });


var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port' + PORT);
});
