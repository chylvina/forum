app.LOAD_INDEX = 'loadIndex';
app.LOAD_NEWS = 'loadNews';
app.LOAD_PRODUCTS = 'loadProducts';
app.LOAD_ABOUT = 'loadAbout';
app.LOAD_MORENEWS = 'loadMoreNews';
app.LOAD_MOREPRODUCTS = 'loadMoreProducts';
app.LOAD_ONENEWS = 'loadOneNews';
app.LOAD_ONEPRODUCT = 'loadOneProduct';
app.LOAD_DATA = 'loadData';

app.load = function(loadType, path, callback) {
  var _queryw = '';//'&width=' + Math.min(app.winW, app.winH);

  switch(loadType) {
    case app.LOAD_INDEX:
      app._doload(_SERVER + _indexPath + _queryw, callback);
      break;
    case app.LOAD_MORENEWS:
      app._doload(_SERVER + _morenews + path + _queryw, callback);
      break;
    case app.LOAD_MOREPRODUCTS:
      app._doload(_SERVER + _moreproducts + path + _queryw, callback);
      break;
    case app.LOAD_DATA:
      app._doload(_SERVER + path + _queryw, callback);
      break;
  }
}

app._doload = function(path, callback) {
  $.ajax({
    type:"GET",
    url: path,
    dataType:"json"
  })
      .success(function (data) {
        if(!data || !data.ret || !data.data) {
          return callback('数据加载失败.');
        }

        callback(null, data.data);
      })
      .error(function (jqXHR, textStatus, errorThrown) {
        callback('数据加载失败.');
      });
}