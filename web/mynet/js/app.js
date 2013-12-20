/**
 *
 * Author: xiongliang.xl@alibaba-inc.com
 * Since: 13-7-8 上午10:40
 * Description:
 */

var app = {
  win: null,
  winW: 0,
  winH: 0,
  UPDATE_ALL: 'updateAll',
  UPDATE_ORIENTATION: 'updateOrientation',
  UPDATE_SIZE: 'updateSize',
  UPDATE_SUBPAGE: 'updateSubpage',
  UPDATE_WIDGET: 'updateWidget',
  UPDATE_CONTENT: 'updateContent'
};

$(document).ready(function () {
  app.init();

  app.tryHideScrollBar();
  app.load(app.LOAD_INDEX, '', function(err, result) {
    if(err) {
      return;
    }

    result.config = _config;
    app.render(result);
    app.run();
  });
});

app.tryHideScrollBar = function() {
  window.setTimeout(function() {
    window.scrollTo( 0, 0 );
    $('#addressFixBar').remove();
  }, 300);
}

app.getNav = function(navIndex) {
  return $('.app-nav li[data-index="' + navIndex + '"]');
}

app.getWinWidth = function() {
  if(app.isIOS()) {
    return window.innerWidth;
  }
  return app.win.width();
};

app.getWinHeight = function() {
  if(app.isIOS()) {
    return window.innerHeight;
  }
  return app.win.height();
};

app.isIOS = function () {
  try {
    var ua = navigator.userAgent;
    return /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-9]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1;
  }
  catch(e) {
    return false;
  }
};

app.init = function() {
  app.win = $(window);
  app.winW = app.getWinWidth();
  app.winH = app.getWinHeight();
};

app.run = function() {
  /// objects
// win
  var body = $('body'),
// main
      main = $('.main'),
      mainWrapper = main.find('.main-wrapper'),
      mainPageLeft = main.find('.main-page-left'),
      mainPageLeftHeader = mainPageLeft.find('.app-header'),
      mainPageRight = main.find('.main-page-right'),
      mainPageRightHeader = mainPageRight.find('.app-header'),
      mainPageRightFooter = mainPageRight.find('.app-footer'),
      content = main.find('.app-content'),
      contentWrapper = content.find('.app-content-wrapper'),
// sub
      sub = $('.sub'),
      subWrapper = sub.find('.sub-wrapper'),
      subPage0 = sub.find('#sub-page-0'),
      subPage1 = sub.find('#sub-page-1'),
      subPage2 = sub.find('#sub-page-2'),
      subPage3 = sub.find('#sub-page-3'),
      currentSubPage,
// newslist
      subPageWrapper,
      newslistPullUp,
      newslistPullUpLabel,
      newslist,
      newslistul,
      newslistli,
      newslistcon,
// productlist
      productlist,
      productlisttitle,
      productlistli,
      productlistimgbox,
      productlistimg,
      productlistspan,
// slider
      slider,
      sliderViewport,
      sliderWrapper,
      sliderItem,
      sliderItemImg,
      sliderItemDiv,
      sliderIndicator,
//
      loader = $('.app-loader');

///
  var winW,
      winH,
      currentNavIndex,
      silderScroll,
      subScroll,
      subpageScroll,
      contentScroll,
      mainScroll;

///
  var initEvent = function () {
    // ie6, ie7
    if(typeof _isoldie != 'undefined' && _isoldie == true) return;

    document.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, false);
    /*content.on('touchmove', function(e) {
      e.preventDefault();
    });*/

    // window
    app.win.on("orientationchange",function (event) {
      update(app.UPDATE_ORIENTATION);
    }).on('resize', function () {
          console.log('resize', app.getWinWidth(), app.getWinHeight());
          update(app.UPDATE_SIZE);
        });
    // nav
    $('.app-nav li').click(function (e) {
      var target = $(e.target);

      showSubPage(Number(target.attr('data-index')), true);
    });
    // main
    mainScroll = new iScroll(main.get(0), {
      momentum: false,
      hScrollbar: false,
      vScrollbar: false,
      hScroll: true,
      vScroll: false,
      lockDirection: true
    });
    mainScroll.disable();
    $('#back-btn').click(function (e) {
      // clear
      if(contentScroll) {
        contentScroll.destroy();
        contentScroll = null;
        content.find('img').unbind();
      }
      loader.hide();

      mainScroll.scrollTo(-winW, 0, 500, true);

      setTimeout(function () {
        contentWrapper.hide();
      }, 500);
    });

    // sub
    subScroll = new iScroll(sub.get(0), {
      snap: true,
      momentum: false,
      lockDirection: true,
      hScrollbar: false,
      vScrollbar: false,
      vScroll: false,
      hScroll: true,
      handleClick: false,
      onScrollEnd: function () {
        showSubPage(Math.round(Math.abs(this.x / winW)));
      }
    });
  }

  var update = app.update = function(target) {
    if(target == app.UPDATE_ALL
        || target == app.UPDATE_SUBPAGE) {
      currentSubPage = $('#sub-page-' + currentNavIndex);
      subPageWrapper = currentSubPage.find('.sub-page-wrapper');
    }

    if(target == app.UPDATE_ALL
        || target == app.UPDATE_ORIENTATION
        || target == app.UPDATE_SIZE) {
      app.winW = winW = app.getWinWidth();
      app.winH = winH = app.getWinHeight();

      $('html').width(winW);
      body.width(winW);
      main.width(winW);
      main.height(winH);
      mainWrapper.css('width', winW * 2 + 'px');
      mainPageLeft.css('width', winW + 'px');
      mainPageRight.css('left', winW + 'px').css('width', winW + 'px');
      content.css('top', mainPageRightHeader.height() + 'px')
          .css('bottom', ((mainPageRightFooter.length) > 0 ? mainPageRightFooter.height() : 0) + 'px');

      subWrapper.css('width', winW * 4 + 'px');
      subPage0.css('left', 0).css('width', winW + 'px');
      subPage1.css('left', winW + 'px').css('width', winW + 'px');
      subPage2.css('left', winW * 2 + 'px').css('width', winW + 'px');
      subPage3.css('left', winW * 3 + 'px').css('width', winW + 'px');

      if (winW < winH) {    // portrait
        main.removeClass('main-landscape').addClass('main-portrait');
      }
      else {                // landscape
        main.removeClass('main-portrait').addClass('main-landscape');
      }
    }

    if(target == app.UPDATE_ALL
        || target == app.UPDATE_SUBPAGE) {

      slider = currentSubPage.find('.app-slider');
      if(slider.length > 0) {
        sliderViewport = slider.find('.app-slider-viewport');
        sliderWrapper = slider.find('.app-slider-wrapper');
        sliderItem = slider.find('.app-slider-item');
        sliderItemImg = slider.find('img');
        sliderItemDiv = slider.find('.app-slider-item-div');
        sliderIndicator = slider.find('.app-slider-indicator');
      }

      newslist = currentSubPage.find('.app-newslist');
      if(newslist.length > 0) {
        newslistul = newslist.find('ul');
        newslistli = newslist.find('li');
        newslistPullUp = currentSubPage.find('.app-newslist-pullUp');
        newslistPullUpLabel = currentSubPage.find('.app-newslist-pullUpLabel');
      }

      productlist = currentSubPage.find('.app-productlist');
      if(productlist.length > 0) {
        productlistli = productlist.find('li');
        productlisttitle = productlist.find('.app-productlist-title');
        productlistimgbox = productlist.find('.app-productlist-imgbox');
        productlistimg = productlist.find('img');
        productlistspan = productlist.find('span');
      }
    }

    if(target == app.UPDATE_ALL
        || target == app.UPDATE_ORIENTATION
        || target == app.UPDATE_SIZE
        || target == app.UPDATE_SUBPAGE) {
      // slider
      if(slider.length > 0) {
        sliderWrapper.css('width', winW * sliderItem.length + 'px');
        sliderItem.css('width', winW + 'px');
        sliderItemDiv.css('width', winW + 'px');
        sliderItemImg.css('max-width', winW + 'px');
        sliderIndicator.css('z-index', Number(sliderIndicator.css('z-index')) + 1);
      }

      // product lists
      if(productlist.length > 0) {
        var ptop, pleft, pright, pbottom, pm1, pm2, pw, ph, pimgh, plevel;

        // calculate
        ptop = productlisttitle ? 40 : 10;
        pbottom = pm2 = 10;
        pw = Math.round(winW * 0.8 / 3);
        pimgh = Math.round(pw * 0.8);
        pleft = pright = pm1 = Math.floor(winW * 0.2 / 4);

        productlistimg.css('max-width', pw + 'px')
            .css('max-height', pimgh + 'px')
            .css('_width', pw + 'px')
            .css('_height', pimgh + 'px');
        productlistimgbox.css('width', pw + 'px')
            .css('height', pimgh + 'px')
            .css('line-height', pimgh + 'px');

        ph = productlistspan.height() + pimgh;

        productlistli.each(function(index){
          var elem = $(this);
          plevel = Math.floor(index / 3);
          elem.css('top', ptop + plevel * (ph + pm2) + 'px')
              .css('left', pleft + (pw + pm1) * (index % 3) + 'px')
              .css('width', pw + 'px');
        });

        productlist.css('height', ptop + pbottom + ph*2 + pm2);
      }
    }

    // element layout
    if(target == app.UPDATE_ALL
        || target == app.UPDATE_SIZE
        || target == app.UPDATE_SUBPAGE
        || target == app.UPDATE_WIDGET) {
      var tempHeight = 0;
      subPageWrapper.children().each(function(index){
        var elem = $(this);
        elem.css('top', tempHeight + 'px');
        tempHeight += elem.outerHeight();
      });
      subPageWrapper.css('height', tempHeight + 'px');
    }

    if(target == app.UPDATE_ALL
        || target == app.UPDATE_CONTENT) {
      var tempHeight = 0;
      contentWrapper.children().each(function(index) {
        var elem = $(this);
        elem.css('top', tempHeight + 'px');
        tempHeight += elem.outerHeight();
      });
      contentWrapper.css('height', tempHeight + 'px');
    }

    /// ie6, ie7
    if(typeof _isoldie != 'undefined' && _isoldie == true) {
      if(newslist) {
        newslist.find('span').css('width', winW - 100 + 'px');
        newslist.find('p').css('width', winW - 100 + 'px');
      }
      if(sub) {
        sub.css('height', winH + 'px');
      }
      return;
    }

    /// update event
    if(target == app.UPDATE_ALL
        || target == app.UPDATE_SUBPAGE) {
      subpageScroll && subpageScroll.destroy();
      subpageScroll = new iScroll(currentSubPage.get(0), {
        useTransition: false,
        lockDirection: true,
        hScrollbar: false,
        vScrollbar: true,
        hScroll: false,
        vScroll: true,
        onRefresh: function () {
          if (newslistPullUp.hasClass('app-newslist-loading')) {
            newslistPullUp.removeClass('app-newslist-loading');
            newslistPullUpLabel.html('上拉加载更多...');
          }
        },
        onScrollMove: function () {
          if (this.y < (this.maxScrollY - 5) && !newslistPullUp.hasClass('app-newslist-flip')) {
            newslistPullUp.addClass('app-newslist-flip');
            newslistPullUpLabel.html('松开立即加载...');
            //this.maxScrollY = this.maxScrollY;
          }
          else if (this.y > (this.maxScrollY + 5) && newslistPullUp.hasClass('app-newslist-flip')) {
            newslistPullUp.removeClass('app-newslist-flip');
            newslistPullUpLabel.html('上拉加载更多...');
            this.maxScrollY = newslistPullUp.height();
          }
        },
        onScrollEnd: function () {
          if (newslistPullUp.hasClass('app-newslist-flip')) {
            newslistPullUp.removeClass('app-newslist-flip');
            newslistPullUp.addClass('app-newslist-loading');
            newslistPullUpLabel.html('正在加载...');

            if(currentNavIndex == 0 || currentNavIndex == 2) {
              app.load(app.LOAD_MORENEWS, newslistli.last().attr('data-id'), function(err, result) {
                if(err) {
                  subpageScroll.refresh();
                  return;
                }

                // load and render
                newslistul.html(newslistul.html() + app.renderNewslist(result, true));
                update(app.UPDATE_WIDGET);
                subpageScroll.refresh();
              });
            }
            else if(currentNavIndex == 1) {
              app.load(app.LOAD_MOREPRODUCTS, newslistli.last().attr('data-id'), function(err, result) {
                if(err) {
                  subpageScroll.refresh();
                  return;
                }

                // load and render
                newslistul.html(newslistul.html() + app.renderNewslist(result, true));
                update(app.UPDATE_WIDGET);
                subpageScroll.refresh();
              });
            }
          }
        }
      });

      //
      silderScroll && silderScroll.destroy();
      if(sliderViewport && sliderViewport.length > 0) {
        silderScroll = new iScroll(sliderViewport.get(0), {
          snap: true,
          hScrollbar: false,
          momentum: false,
          vScrollbar: false,
          hScroll: true,
          vScroll: false,
          lockDirection: true,
          stopEventProp: true,
          onScrollEnd: function () {
            $('.app-slider-indicator li.active').removeClass('active');
            $('.app-slider-indicator li:nth-child(' + (this.currPageX + 1) + ')').addClass('active');
          }
        });
      }

      //
      var renderMainScroll = function(url, backbtnLabel) {
        $('#back-btn').text(backbtnLabel || '返回');
        mainScroll.scrollTo(winW, 0, 500, true);

        setTimeout(function () {
          loader.show();
          app.load(app.LOAD_DATA, url, function(err, result) {
            if(err) {
              return;
            }

            loader.hide();
            app.renderContent(result);
            contentWrapper.show();
            update(app.UPDATE_CONTENT);
            contentScroll = new iScroll(content.get(0), {
              useTransition: true,
              momentum: true,
              lockDirection: true,
              hScrollbar: false,
              vScrollbar: true,
              vScroll: true,
              hScroll: false
            });
            content.find('img').on('load', function() {
              app.update(app.UPDATE_CONTENT);
              contentScroll.refresh();
            });
          });
        }, 500);
      }

      //
      if(productlistli) {
        productlistli.unbind();
        productlistli.on('touchstart', function(e) {
          var target = $(e.currentTarget);
          target.on('touchmove', function(e) {
            target.unbind('touchmove');
            target.unbind('touchend');
          });
          target.on('touchend', function(e) {
            renderMainScroll(target.attr('data-url'), app.getNav(currentNavIndex).text().trim());
          });
        });
        productlistli.mousedown(function (e) {
          var target = $(e.currentTarget);
          target.mousemove(function(e) {
            target.unbind('mousemove');
            target.unbind('mouseup');
          });
          target.mouseup(function(e) {
            renderMainScroll(target.attr('data-url'), app.getNav(currentNavIndex).text().trim());
          });
        });
      }

      //
      if(newslistli) {
        newslistli.unbind();
        newslistli.on('touchstart', function(e) {
          var target = $(e.currentTarget);
          target.on('touchmove', function(e) {
            target.unbind('touchmove');
            target.unbind('touchend');
          });
          target.on('touchend', function(e) {
            renderMainScroll(target.attr('data-url'), app.getNav(currentNavIndex).text().trim());
          });
        });
        newslistli.mousedown(function (e) {
          var target = $(e.currentTarget);
          target.mousemove(function(e) {
            target.unbind('mousemove');
            target.unbind('mouseup');
          });
          target.mouseup(function(e) {
            renderMainScroll(target.attr('data-url'), app.getNav(currentNavIndex).text().trim());
          });
        });
      }
    }
  }

  var showSubPage = function (targetIndex, transition) {
    if (currentNavIndex == undefined) {
      currentNavIndex = targetIndex;
      update(app.UPDATE_ALL);
      return;
    }

    if (currentNavIndex == targetIndex) {
      return;
    }

    if (transition) {
      subScroll.scrollTo(winW * (targetIndex - currentNavIndex), 0, 500, true);
    }

    // update nav index
    currentNavIndex = targetIndex;

    var targetSubPage = $('#sub-page-' + targetIndex);

    // app-nav
    $('.app-nav .app-nav-active').removeClass('app-nav-active');
    var dataUrl = app.getNav(targetIndex).addClass('app-nav-active').attr('data-url');

    // render data
    loader.hide();
    if (targetSubPage.attr('data-loaded') != '1') {
      loader.show();

      app.load(app.LOAD_DATA, dataUrl, function(err, result) {
        if(err) {
          return;
        }

        loader.hide();
        // render
        app.renderSubPage(targetIndex, result);
        // update
        update(app.UPDATE_SUBPAGE);
      });
    }
    else {
      // update
      update(app.UPDATE_SUBPAGE);
    }

    targetSubPage.show();
  };

  // start
  loader.hide();
  showSubPage(0);
  initEvent();
};