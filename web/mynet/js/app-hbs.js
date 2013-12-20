/**
 *
 * Author: xiongliang.xl@alibaba-inc.com
 * Since: 13-7-8 上午10:39
 * Description:
 */

app.render = function(thedata) {
  var commonRender = function(data) {
    var result = '';

    for(i = 0; i < data.content.length; i++) {
      var elem = data.content[i];
      switch(elem.t) {
        case "title":
          result += Handlebars.templates['app-title.hbs'](elem);
          break;
        case "subtitle":
          result += Handlebars.templates['app-subtitle.hbs'](elem);
          break;
        case "divider":
          result += Handlebars.templates['app-divider.hbs'](elem);
          break;
        case "image":
          result += Handlebars.templates['app-image.hbs'](elem);
          break;
        case "text":
          result += Handlebars.templates['app-text.hbs'](elem);
          break;
        case "link":
          result += Handlebars.templates['app-link.hbs'](elem);
          break;
        case "phone":
          result += Handlebars.templates['app-phone.hbs'](elem);
          break;
        case "slider":
          result += Handlebars.templates['app-slider.hbs'](elem);
          break;
        case "newslist":
          result += Handlebars.templates['app-newslist.hbs'](elem);
          break;
        case "productlist":
          // data.pageType 就在本页定义
          if(data.pageType == 'subpage0') { // 首页
            result += Handlebars.templates['app-productlist.hbs'](elem);
          }
          else if (data.pageType == 'subpage1') {
            result += Handlebars.templates['app-newslist.hbs'](elem);
          }
          break;
      }
    }

    return result;
  };

  Handlebars.registerHelper('app-header', function(options) {
    for(i = 0; i < this.content.length; i++) {
      var elem = this.content[i];
      if(elem.t == "header") {
        return options.fn(elem);
      }
    }
  });
  Handlebars.registerHelper('app-slider', function(options) {
    return options.fn(this);
  });
  Handlebars.registerHelper('app-nav', function(options) {
    for(i = 0; i < this.content.length; i++) {
      var elem = this.content[i];
      if(elem.t == "nav") {
        return options.fn(elem);
      }
    }
  });
  Handlebars.registerHelper('app-content', function(options) {
    return commonRender(this);
  });
  Handlebars.registerHelper('app-sub-page', function(options) {
    return commonRender(this);
  });
  Handlebars.registerHelper('app-productlist', function(options) {
    return options.fn(this);
  });
  Handlebars.registerHelper('app-newslist', function(options) {
    if(this.isall == undefined) {
      this.isall = true;
    }
    return options.fn(this);
    /*var data;
    if (options.data) {
      data = Handlebars.createFrame(options.data || {});
    }

    if(this.t == 'data') {
      data.isall = true;  // 在hbs模板中，指示需要渲染全部
      for(i = 0; i < this.content.length; i++) {
        var elem = this.content[i];
        if(elem.t == "newslist") {
          return options.fn(elem, { data: data });
        }
      }
    }

    data.isall = false; // 在hbs模板中，指示不需要渲染全部
    return options.fn(this, { data: data });*/
  });

  app.renderHeader(thedata);
  app.renderApp(thedata);
  app.renderSubPage(0, thedata);
}

app.renderHeader = function(data) {
  $('head').prepend($(Handlebars.templates['doc-header.hbs'](data)));
}

app.renderApp = function(data) {
  $('body').prepend($(Handlebars.templates['app.hbs'](data)));
}

app.renderSubPage = function(pageIndex, data) {
  data.pageType = 'subpage' + pageIndex;
  $('#sub-page-' + pageIndex + '')
      .attr('data-loaded', '1')
      .find('.sub-page-wrapper')
      .html(Handlebars.templates['app-sub-page.hbs'](data));
};

app.renderNewslist = function(data, partial) {
  if(partial) {
    data.isall = false;
  }
  else {
    data.isall = true;
  }
  return Handlebars.templates['app-newslist.hbs'](data);
}

app.renderContent = function(data) {
  data.pageType = 'content';
  $('.app-content-wrapper').html(Handlebars.templates['app-content.hbs'](data));
}