var app     = require('./server/server.js');
var port    = process.env.PORT || 8080;

app.listen(port);
console.log('App listening at ', port);