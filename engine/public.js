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

var redis = require("redis"),
    client = redis.createClient();

var Q = require("q");

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

var newsmthParse = require('./modules/newsmth-parse');

var _qParseIndex = function () {
    var deferred = Q.defer();

    var urlStr = 'http://www.newsmth.net/nForum/#!mainpage';

    newsmthParse.run(urlStr, 'parse-index.js', function (err, result) {
        if (err) {
            deferred.reject(500);
        }

        client.set("test", result);

        deferred.resolve(result);
    });

    return deferred.promise;
};

var _qGetDataFromRedis = function (key) {
    var deferred = Q.defer();

    client.get(key, function (err, reply) {
        if (err) {
            deferred.reject(err);
        }
        else {
            if (reply == null) {
                deferred.reject(404);
            }
            else {
                try {
                    deferred.resolve(JSON.parse(reply.toString()));
                }
                catch (e) {
                    deferred.reject(e);
                }
            }
        }
    });

    return deferred.promise;
}

var parseIndexTask = function() {
    _qParseIndex();

    setTimeout(parseIndexTask, 60000);
};

server.get('/api/newsmth/top10', function (req, res, next) {
    _qGetDataFromRedis('test')
        .then(
        function (data) {
            return res.json({
                success: true,
                data: data.top10
            });
        },
        function (err) {
            _qParseIndex()
                .then(
                function (data) {
                    console.log(JSON.parse(data).top10);
                    return res.json({
                        success: true,
                        data: JSON.parse(data).top10
                    });
                },
                function (err) {
                    return res.send(500, 'error');
                });
        }
    );
});

server.get('/api/newsmth/recommend', function (req, res, next) {
    _qGetDataFromRedis('test')
        .then(
        function (data) {
            return res.json({
                success: true,
                data: data.slider
            });
        },
        function (err) {
            _qParseIndex()
                .then(
                function (data) {
                    console.log(JSON.parse(data).slider);
                    return res.json({
                        success: true,
                        data: JSON.parse(data).slider
                    });
                },
                function (err) {
                    return res.send(500, 'error');
                });
        }
    );
});

server.get('/api/newsmth/index', function (req, res, next) {
    //var urlStr = req.query.url;
    urlStr = 'http://www.newsmth.net/nForum/#!mainpage';//'http://www.newsmth.net/nForum/#!article/DragonBall/13151';
    if (!urlStr) {
        return res.send(400, 'url is required.');
    }
    console.log('urlStr:', urlStr);

    newsmthParse.run(urlStr, 'parse-index.js', function (err, result) {
        if (err) {
            res.send(500, err);
        }

        console.log(result);

        client.set("test", result);

        return res.send(200, 'OK');
    });

    return next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);

    parseIndexTask();
});