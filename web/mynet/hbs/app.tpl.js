(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"container viewport main theme-"
    + escapeExpression(((stack1 = ((stack1 = depth0.config),stack1 == null || stack1 === false ? stack1 : stack1.themeId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  <div class=\"wrapper main-wrapper main-wrapper-left\">\r\n    <div class=\"container page main-page-left\">\r\n\r\n			";
  stack2 = self.invokePartial(partials['app-header.hbs'], 'app-header.hbs', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n			";
  stack2 = self.invokePartial(partials['app-nav.hbs'], 'app-nav.hbs', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n      <div class=\"container viewport sub\">\r\n        <div class=\"wrapper sub-wrapper\">\r\n          <div id=\"sub-page-0\" class=\"container page viewport sub-page\" data-loaded=\"0\">\r\n            <div class=\"wrapper sub-page-wrapper\">\r\n            </div>\r\n          </div>\r\n          <div id=\"sub-page-1\" class=\"container page viewport sub-page\" data-loaded=\"0\">\r\n            <div class=\"wrapper sub-page-wrapper\">\r\n            </div>\r\n          </div>\r\n          <div id=\"sub-page-2\" class=\"container page viewport sub-page\" data-loaded=\"0\">\r\n            <div class=\"wrapper sub-page-wrapper\">\r\n            </div>\r\n          </div>\r\n          <div id=\"sub-page-3\" class=\"container page viewport sub-page\" data-loaded=\"0\">\r\n            <div class=\"wrapper sub-page-wrapper\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container page main-page-right\">\r\n      <div class=\"container app-header app-header-fixed\">\r\n        <button id=\"back-btn\" class=\"btn app-header-backbtn\">返回</button>\r\n        <h1 class=\"app-header-title\">\r\n          ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\r\n        </h1>\r\n      </div>\r\n      <div class=\"container viewport app-content\">\r\n        <div class=\"wrapper app-content-wrapper\">\r\n\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"container app-footer app-footer-fixed\">\r\n        <h3 class=\"app-footer-title\">\r\n          footer\r\n        </h3>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>";
  return buffer;
  });
})();