/**
 * Public Server
 * Author: chylvina@gmail.com
 * Since: 13-12-19 19:02
 * Description:
 */

var restify = require('restify');

var server = restify.createServer({
    name: 'engine',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});