(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app-slider.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n  <div class=\"container app-slider\">\r\n    <div class=\"app-slider-indicator\">\r\n      <ul class=\"indicator\">\r\n			  ";
  stack1 = helpers.each.call(depth0, depth0.children, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </ul>\r\n    </div>\r\n    <div class=\"container viewport app-slider-viewport\">\r\n      <div class=\"wrapper app-slider-wrapper\">\r\n				";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.children) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.children; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.children) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n          <li ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifCond || depth0.ifCond),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), "==", 0, options) : helperMissing.call(depth0, "ifCond", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), "==", 0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "></li>\r\n			  ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "class=\"active\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n          <div class=\"app-slider-item\">\r\n            <img src=\"";
  if (stack1 = helpers.thumb) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.thumb; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n\r\n            <div class=\"app-slider-item-div\" data-url=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n              <span class=\"app-slider-item-label\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n            </div>\r\n          </div>\r\n				";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers['app-slider']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['app-slider']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers['app-slider']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();