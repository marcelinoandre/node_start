//teste
console.log('teste inicial OK! :)');

//  OpenShift sample Node application
var express = require('express'),
app     = express();

Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;