var newsmth_parse = function() {
    var result = {};

    result.top10 = getTop10();
    result.slider = getSlider();
    result.hotspot = getHotSpot();

    return JSON.stringify(result);
};

var url2Mobile = function(s) {
    return s.replace("http://www.newsmth.net/nForum/", "http://m.newsmth.net/");
}

var getTop10 = function() {
    var result = [];
    $('#top10 li').each(function (index, elem) {
        var topic = {};
        $(elem).find('a').each(function (index, elem) {
            var elem = $(elem);
            if(index == 0) {
                topic.categoryHref = url2Mobile(elem.prop('href'));
                topic.category = elem.prop('title');
            }
            else if(index == 1) {
                topic.href = url2Mobile(elem.prop('href'));
                topic.title = elem.prop('title');
            }

        });
        result.push(topic);
    });

    return result;
};

var getSlider = function() {
    var result = [];
    $('#slider .pic a').each(function(index, elem) {
        var elem = $(elem);
        var topic = {};
        topic.href = url2Mobile(elem.prop('href'));
        topic.title = elem.prop('title');
        topic.image = elem.find('img').prop('src');
        result.push(topic);
    });

    return result;
};

// todo: 没有做'论坛活动'
var getHotSpot = function() {
    var result = [];
    $('#hotspot .topics li').each(function (index, elem) {
        var topic = {};
        $(elem).find('a').each(function (index, elem) {
            var elem = $(elem);
            if(index == 0) {
                topic.categoryHref = url2Mobile(elem.prop('href'));
                topic.category = elem.prop('title');
            }
            else if(index == 1) {
                topic.href = url2Mobile(elem.prop('href'));
                topic.title = elem.prop('title');
            }
        });
        result.push(topic);
    });

    return result;
};