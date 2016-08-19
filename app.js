var express = require('express');
var app = express();
var path = express.static('src');

app.use(path);

app.listen(5000, () => {
  console.log('Port: 5000');
});
