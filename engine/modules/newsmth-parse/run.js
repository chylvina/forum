// default settings
var urlStr = phantom.args[0] || '';
var script = phantom.args[1] || '';

var createPage = function () {
  var page = new WebPage();

  page.onConsoleMessage = function(msg, lineNum, sourceId) {
    //console.log(msg);
  };

  page.viewportSize = {
    width: 1024,
    height: 600
  };
  page.settings['javascriptEnabled'] = true;
  page.settings['loadImages'] = false;    // we do not need show image here.
  //page.settings['localToRemoteUrlAccessEnabled'] = value;
  //page.settings['userAgent'] = value;

  return page;
};

var getURL = function (url) {
  if (~url.indexOf('://')) return url;
  return 'http://' + url;
};

var run = function (urlStr, request, response) {
  // URL is required.
  var url = getURL(urlStr);
  if (!url || url == '') {
    console.error('url is required: ' + url);
    phantom.exit();
    return;
  }
  var page = createPage();

  console.log('Opening: ' + url);
  page.open(url, function (status) {
    if (status !== 'success') {
      console.log('Load url error: ' + url);
      phantom.exit();
      return;
    }
    if (page.injectJs(script)) {
      var result = page.evaluate(function(){
        return newsmth_parse();
      });
      // !! important, NO MORE chars are allowed to output after this.
      // Or else the result string will be destroyed
      console.log('result:' + result);
      page.release();
      phantom.exit();
    }
    else {
      console.log('Failed to inject inject.js');
      page.release();
      phantom.exit();
    }
  });
};

run(urlStr);