/**
 *
 * Author: xiongliang.xl@alibaba-inc.com
 * Since: 13-6-21 下午5:27
 * Description:
 */

var express = require('express');
var lactate = require('lactate');

var app = express();

var cache = function (dir, from, env) {
  var staticFiles = lactate.dir(dir, {from: from});

  /// ------ development only
  if ('development' == env) {
    staticFiles.disable('minify');
    staticFiles.disable('gzip');
    staticFiles.disable('cache');
    staticFiles.enable('watch files');
    staticFiles.enable('debug');
  }

  return staticFiles.toMiddleware();
}

app.get('/', function(req, res, next) {

})

app.get('/index', function(req, res, next) {
  res.send(200, JSON.stringify({
    "ret": true,
    "data": {
      "host": "localhost",
      "url": "/",
      "title": "成都明友化工有限公司",
      "description": "成都干燥剂，四川干燥剂，小包干燥剂，防潮珠 电话：028－85775467  13699466499&#169;2010 成都明友化工有限公司 版权所有    地址：四川省成都市双流县九江镇   蜀ICP备10025538号",
      "logo": {
        "src": ""
      },
      "version": "1.0",
      "theme": "green",
      "layout": "layout-1",
      "t": "data",
      "content": [
        {
          "t": "header",
          "text": "成都明友化工有限公司"
        },
        {
          "t": "nav",
          "children": [
            {
              "url": "index",
              "text": "首页",
              "active": 1
            },
            {
              "url": "products",
              "text": "商品"
            },
            {
              "url": "news",
              "text": "文章"
            },
            {
              "url": "about",
              "text": "关于"
            }
          ]
        },
        {
          "t": "slider",
          "children": [
            {
              "url": "/admin/design.aspx?docuid=1479",
              "text": "描述描述描述描述描述描述",
              "thumb": "img/slider1.jpg"
            },
            {
              "url": "~/admin/design.aspx?docuid=1479",
              "text": "描述描述描述描述描述描述",
              "thumb": "img/slider2.jpg"
            },
            {
              "url": "~/admin/design.aspx?docuid=1479",
              "text": "描述描述描述描述描述描述",
              "thumb": "img/slider3.jpg"
            }
          ]
        },
        {
          "t": "productlist",
          "title": "推荐商品",
          "children": [
            {
              "url": "oneproduct",
              "title": "产品一",
              "text": "产品简介产品简介产品简介产品简介",
              "thumb": "img/pic1.jpg"
            },
            {
              "url": "oneproduct",
              "title": "产品二",
              "text": "产品简介产品简介产品简介产品简介",
              "thumb": "img/pic1.jpg"
            },
            {
              "url": "oneproduct",
              "title": "产品三",
              "text": "产品简介产品简介产品简介产品简介",
              "thumb": "img/pic1.jpg"
            },
            {
              "url": "oneproduct",
              "title": "产品四",
              "text": "产品简介产品简介产品简介产品简介",
              "thumb": "img/pic1.jpg"
            },
            {
              "url": "oneproduct",
              "title": "产品五",
              "text": "产品简介产品简介产品简介产品简介",
              "thumb": "img/pic1.jpg"
            },
            {
              "url": "oneproduct",
              "title": "产品六",
              "text": "产品简介产品简介产品简介产品简介",
              "thumb": "img/pic1.jpg"
            }
          ]
        },
        {
          "t": "newslist",
          "title": "最新资讯",
          "children": [
            {
              "url": "onenews",
              "title": "MWC缺乏看点:廉价手",
              "text": "FirefoxOS的发布让廉价手机成为本届亮点。",
              "date": "2013-1-30",
              "thumb": "img/pic1.jpg"
            },
            {
              "title": "三星计划今年平板电脑三星计划今年平板电脑三星计划今年平板电脑",
              "url": "_d270491683.htm",
              "text": "虽然这一目标看似激进，但不能帮助三星超越苹果。",
              "date": "2013-1-30"
            },
            {
              "title": "016移动设备出货量或达26亿台",
              "url": "_d270491685.htm",
              "text": "平板电脑将是出货量增长速度最快的移动设备。",
              "date": "2013-1-30",
              "thumb": "img/pic3.jpg"
            },
            {
              "url": "onenews",
              "title": "MWC缺乏看点:廉价手",
              "text": "FirefoxOS的发布让廉价手机成为本届亮点。",
              "date": "2013-1-30",
              "thumb": "img/pic1.jpg"
            },
            {
              "title": "三星计划今年平板电脑",
              "url": "_d270491683.htm",
              "text": "虽然这一目标看似激进，但不能帮助三星超越苹果。",
              "date": "2013-1-30",
              "thumb": "img/pic2.jpg"
            },
            {
              "title": "016移动设备出货量或达26亿台",
              "url": "_d270491685.htm",
              "text": "平板电脑将是出货量增长速度最快的移动设备。",
              "date": "2013-1-30",
              "thumb": "img/pic3.jpg"
            },
            {
              "url": "onenews",
              "title": "MWC缺乏看点:廉价手",
              "text": "FirefoxOS的发布让廉价手机成为本届亮点。",
              "date": "2013-1-30",
              "thumb": "img/pic1.jpg"
            },
            {
              "title": "三星计划今年平板电脑",
              "url": "onenews",
              "text": "虽然这一目标看似激进，但不能帮助三星超越苹果。",
              "date": "2013-1-30",
              "thumb": "img/pic2.jpg"
            },
            {
              "title": "016移动设备出货量或达26亿台",
              "url": "onenews",
              "text": "平板电脑将是出货量增长速度最快的移动设备。",
              "date": "2013-1-30",
              "thumb": "img/pic3.jpg"
            }
          ]
        },
        {
          "t": "footer"
        }
      ]
    }
  }));
});

app.get('/products', function(req, res, next) {
  //res.json();
});

app.get('/news', function(req, res, next) {

});

app.get('/about', function(req, res, next) {
  res.send(200, JSON.stringify({
    ret: true,
    data: {
      "host": "localhost",
      "url": "/",
      "title": "成都明友化工有限公司",
      "description": "成都干燥剂，四川干燥剂，小包干燥剂，防潮珠 电话：028－85775467  13699466499&#169;2010 成都明友化工有限公司 版权所有    地址：四川省成都市双流县九江镇   蜀ICP备10025538号",
      "logo": {
        "src": ""
      },
      "version": "1.0",
      "theme": "black",
      "layout": "layout-1",
      "t": "data",
      "content": [
        {
          "t": "title",
          "text": "四川干燥剂生产厂家－成都明友化工有限公司"
        },
        {
          "t": "subtitle",
          "text": "2001年4月15日 UTC+8 11:00"
        },
        {
          "t": "text",
          "text": "联系人：蒋小姐电话："
        },
        {
          "t": "phone",
          "number": "15201685780",
          "text": "15201685780"
        },
        {
          "t": "link",
          "url": "mailto:lb2002_lb@163.com",
          "text": "Email: lb2002_lb@163.com"
        }
      ]
    }
  }));
});

app.get('/moreproducts', function(req, res, next) {

});

app.get('/oneproduct', function(req, res, next) {
  res.send(200, JSON.stringify({
    ret: true,
    data: {
      "host": "localhost",
      "url": "/",
      "title": "成都明友化工有限公司",
      "description": "成都干燥剂，四川干燥剂，小包干燥剂，防潮珠 电话：028－85775467  13699466499&#169;2010 成都明友化工有限公司 版权所有    地址：四川省成都市双流县九江镇   蜀ICP备10025538号",
      "logo": {
        "src": ""
      },
      "version": "1.0",
      "theme": "black",
      "layout": "layout-1",
      "t": "data",
      "content": [
        {
          "t": "title",
          "text": "硅胶干燥剂的七大用途："
        },
        {
          "t": "subtitle",
          "text": "来源方式：原创 发布时间：2013-05-17"
        },
        {
          "t": "image",
          "src": "http://gzj168.com/_c_fCPGGoytGOCo2OmfUxkt2x6jLBe8EXUB5ilYWySBjuOxyxE1d2ZygZZjzWZSj3-feeIjtwQlouDNAb8gX0MM38xx49v7SbpL.jpg"
        },
        {
          "t": "text",
          "text": "一、粗孔硅胶的用途 粗孔硅胶外观呈乳白色，有块状，球形和微球形三类产品。它主要用作催化剂载体；因有其选择性吸附作用，可脱除水中有害元素和绝缘油中的有机酸，也可用作脱水剂和干燥。"
        },
        {
          "t": "link",
          "url": "http://www.baidu.com",
          "text": "这是一个超链接"
        },
        {
          "t": "footer"
        }
      ]
    }
  }));
});

app.get('/onenews', function(req, res, next) {
  res.send(200, JSON.stringify({
    ret: true,
    data: {
      "host": "localhost",
      "url": "/",
      "title": "成都明友化工有限公司",
      "description": "成都干燥剂，四川干燥剂，小包干燥剂，防潮珠 电话：028－85775467  13699466499&#169;2010 成都明友化工有限公司 版权所有    地址：四川省成都市双流县九江镇   蜀ICP备10025538号",
      "logo": {
        "src": ""
      },
      "version": "1.0",
      "theme": "black",
      "layout": "layout-1",
      "t": "data",
      "content": [
        {
          "t": "title",
          "text": "硅胶干燥剂的七大用途："
        },
        {
          "t": "subtitle",
          "text": "来源方式：原创 发布时间：2013-05-17"
        },
        {
          "t": "divider",
          "text": "文章详情"
        },
        {
          "t": "image",
          "src": "http://gzj168.com/_c_fCPGGoytGOCo2OmfUxkt2x6jLBe8EXUB5ilYWySBjuOxyxE1d2ZygZZjzWZSj3-feeIjtwQlouDNAb8gX0MM38xx49v7SbpL.jpg"
        },
        {
          "t": "text",
          "text": "一、粗孔硅胶的用途 粗孔硅胶外观呈乳白色，有块状，球形和微球形三类产品。它主要用作催化剂载体；因有其选择性吸附作用，可脱除水中有害元素和绝缘油中的有机酸，也可用作脱水剂和干燥。"
        },
        {
          "t": "text",
          "text": "一、粗孔硅胶的用途 粗孔硅胶外观呈乳白色，有块状，球形和微球形三类产品。它主要用作催化剂载体；因有其选择性吸附作用，可脱除水中有害元素和绝缘油中的有机酸，也可用作脱水剂和干燥。"
        },
        {
          "t": "text",
          "text": "一、粗孔硅胶的用途 粗孔硅胶外观呈乳白色，有块状，球形和微球形三类产品。它主要用作催化剂载体；因有其选择性吸附作用，可脱除水中有害元素和绝缘油中的有机酸，也可用作脱水剂和干燥。"
        },
        {
          "t": "text",
          "text": "一、粗孔硅胶的用途 粗孔硅胶外观呈乳白色，有块状，球形和微球形三类产品。它主要用作催化剂载体；因有其选择性吸附作用，可脱除水中有害元素和绝缘油中的有机酸，也可用作脱水剂和干燥。"
        },
        {
          "t": "text",
          "text": "一、粗孔硅胶的用途 粗孔硅胶外观呈乳白色，有块状，球形和微球形三类产品。它主要用作催化剂载体；因有其选择性吸附作用，可脱除水中有害元素和绝缘油中的有机酸，也可用作脱水剂和干燥。"
        },
        {
          "t": "link",
          "url": "http://www.baidu.com",
          "text": "这是一个超链接"
        },
        {
          "t": "footer"
        }
      ]
    }
  }));
});

app.get('/morenews', function(req, res, next) {
  res.send(200, JSON.stringify({
    "t": "newslist",
    "children": [
      {
        "url": "/admin/design.aspx?docuid=1479",
        "title": "MWC缺乏看点:廉价手",
        "text": "FirefoxOS的发布让廉价手机成为本届亮点。",
        "date": "2013-1-30",
        "thumb": "img/pic1.jpg"
      },
      {
        "title": "三星计划今年平板电脑",
        "url": "_d270491683.htm",
        "text": "虽然这一目标看似激进，但不能帮助三星超越苹果。",
        "date": "2013-1-30",
        "thumb": "img/pic2.jpg"
      },
      {
        "title": "016移动设备出货量或达26亿台",
        "url": "_d270491685.htm",
        "text": "平板电脑将是出货量增长速度最快的移动设备。",
        "date": "2013-1-30",
        "thumb": "img/pic3.jpg"
      },
      {
        "url": "/admin/design.aspx?docuid=1479",
        "title": "MWC缺乏看点:廉价手",
        "text": "FirefoxOS的发布让廉价手机成为本届亮点。",
        "date": "2013-1-30",
        "thumb": "img/pic1.jpg"
      },
      {
        "title": "三星计划今年平板电脑",
        "url": "_d270491683.htm",
        "text": "虽然这一目标看似激进，但不能帮助三星超越苹果。",
        "date": "2013-1-30",
        "thumb": "img/pic2.jpg"
      },
      {
        "title": "016移动设备出货量或达26亿台",
        "url": "_d270491685.htm",
        "text": "平板电脑将是出货量增长速度最快的移动设备。",
        "date": "2013-1-30",
        "thumb": "img/pic3.jpg"
      },
      {
        "url": "/admin/design.aspx?docuid=1479",
        "title": "MWC缺乏看点:廉价手",
        "text": "FirefoxOS的发布让廉价手机成为本届亮点。",
        "date": "2013-1-30",
        "thumb": "img/pic1.jpg"
      },
      {
        "title": "三星计划今年平板电脑",
        "url": "_d270491683.htm",
        "text": "虽然这一目标看似激进，但不能帮助三星超越苹果。",
        "date": "2013-1-30",
        "thumb": "img/pic2.jpg"
      },
      {
        "title": "016移动设备出货量或达26亿台",
        "url": "_d270491685.htm",
        "text": "平板电脑将是出货量增长速度最快的移动设备。",
        "date": "2013-1-30",
        "thumb": "img/pic3.jpg"
      }
    ]
  }));
});

app.use(cache('../../', '/', app.get('env')));

app.listen(9000);
console.log("\n  Express server listening on port " + 9000 + ' in ' + app.get('env') + ' mode ...\n');