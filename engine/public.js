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

var newsmthParse = require('./modules/newsmth-parse');

server.get('/api/newsmth/top10', function (req, res, next) {
    return res.json({
        success: true,
        data: [
            {
                category: "category1",
                categoryHref: "categoryHref1",
                title: "title1",
                href: "href1",
                num: "num1"
            },
            {
                category: "category2",
                categoryHref: "categoryHref2",
                title: "title2",
                href: "href2",
                num: "num2"
            },
            {
                category: "category3",
                categoryHref: "categoryHref3",
                title: "title3",
                href: "href3",
                num: "num3"
            },
            {
                category: "category4",
                categoryHref: "categoryHref4",
                title: "title4",
                href: "href4",
                num: "num4"
            },
            {
                category: "category5",
                categoryHref: "categoryHref5",
                title: "title5",
                href: "href5",
                num: "num5"
            }
        ]
    });
});

server.get('/api/newsmth/index', function (req, res, next) {
    //var urlStr = req.query.url;
    urlStr = 'http://www.newsmth.net/nForum/#!mainpage';//'http://www.newsmth.net/nForum/#!article/DragonBall/13151';
    if(!urlStr) {
        return res.send(400, 'url is required.');
    }
    console.log('urlStr:', urlStr);

    newsmthParse.run(urlStr, 'parse-index.js', function(err, result) {
        if(err) {
            res.send(500, err);
        }

        //var filename = utils.md5(urlStr);
        // 去掉 console.log 出来的 \n
        //fs.writeFileSync("./tmp/" + filename, "var contentData = '" + utils.escape(result.trim()) + "';");

        //
        /*var minified = UglifyJS.minify([
            "./hbs/title.js",
            "./hbs/text.js",
            "./hbs/navbar.js",
            "./hbs/link.js",
            "./hbs/imagelist.js",
            "./hbs/image.js",
            "./hbs/header.js",
            "./hbs/footer-title.js",
            "./hbs/footer-text.js",
            "./hbs/footer-link.js",
            "./hbs/footer-image.js",
            "./tmp/" + filename,
            "./hbs/render.js"
        ]);*/

        //fs.writeFileSync("./views/" + filename + ".js", minified.code);

        console.log(result);

        return res.json(result);

        /*return res.render('frame', {
            src: filename + ".js"
        });*/
    });

    return next();
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});