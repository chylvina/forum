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

server.get('/api/newsmth/top10', function (req, res, next) {
    //res.send(req.params);
    res.json({
        success: 1,
        data: {
            list: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            ]
        }
    });
    return next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});