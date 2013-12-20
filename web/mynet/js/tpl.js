!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);partials=this.merge(partials,Handlebars.partials);data=data||{};var buffer="",stack1,stack2,functionType="function",escapeExpression=this.escapeExpression,self=this;buffer+='<div class="container viewport main theme-'+escapeExpression((stack1=(stack1=depth0.config,stack1==null||stack1===false?stack1:stack1.themeId),typeof stack1===functionType?stack1.apply(depth0):stack1))+'">\r\n  <div class="wrapper main-wrapper main-wrapper-left">\r\n    <div class="container page main-page-left">\r\n\r\n			';stack2=self.invokePartial(partials["app-header.hbs"],"app-header.hbs",depth0,helpers,partials,data);if(stack2||stack2===0){buffer+=stack2}buffer+="\r\n\r\n			";stack2=self.invokePartial(partials["app-nav.hbs"],"app-nav.hbs",depth0,helpers,partials,data);if(stack2||stack2===0){buffer+=stack2}buffer+='\r\n\r\n      <div class="container viewport sub">\r\n        <div class="wrapper sub-wrapper">\r\n          <div id="sub-page-0" class="container page viewport sub-page" data-loaded="0">\r\n            <div class="wrapper sub-page-wrapper">\r\n            </div>\r\n          </div>\r\n          <div id="sub-page-1" class="container page viewport sub-page" data-loaded="0">\r\n            <div class="wrapper sub-page-wrapper">\r\n            </div>\r\n          </div>\r\n          <div id="sub-page-2" class="container page viewport sub-page" data-loaded="0">\r\n            <div class="wrapper sub-page-wrapper">\r\n            </div>\r\n          </div>\r\n          <div id="sub-page-3" class="container page viewport sub-page" data-loaded="0">\r\n            <div class="wrapper sub-page-wrapper">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="container page main-page-right">\r\n      <div class="container app-header app-header-fixed">\r\n        <button id="back-btn" class="btn app-header-backbtn">返回</button>\r\n        <h1 class="app-header-title">\r\n          ';if(stack2=helpers.title){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.title;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+'\r\n        </h1>\r\n      </div>\r\n      <div class="container viewport app-content">\r\n        <div class="wrapper app-content-wrapper">\r\n\r\n        </div>\r\n      </div>\r\n      <!--<div class="container app-footer app-footer-fixed">\r\n        <h3 class="app-footer-title">\r\n          footer\r\n        </h3>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>';return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};Handlebars.partials["app-header.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,functionType="function",escapeExpression=this.escapeExpression,self=this,blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){var buffer="",stack1;buffer+='\r\n<div class="container app-header">\r\n  <h1 class="app-header-title">';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</h1>\r\n</div>\r\n";return buffer}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-header"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-header"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-header"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};Handlebars.partials["app-nav.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,functionType="function",escapeExpression=this.escapeExpression,self=this,blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){var buffer="",stack1;buffer+='\r\n  <div class="container app-nav">\r\n    <ul class="app-nav-ul">\r\n			';stack1=helpers.each.call(depth0,depth0.children,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n    </ul>\r\n  </div>\r\n";return buffer}function program2(depth0,data){var buffer="",stack1,stack2;buffer+='\r\n        <!-- nav level 1 -->\r\n        <li data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'" data-index="'+escapeExpression((stack1=(stack1=data,stack1==null||stack1===false?stack1:stack1.index),typeof stack1===functionType?stack1.apply(depth0):stack1))+'" ';stack2=helpers["if"].call(depth0,depth0.active,{hash:{},inverse:self.noop,fn:self.program(3,program3,data),data:data});if(stack2||stack2===0){buffer+=stack2}buffer+=">\r\n					";if(stack2=helpers.text){stack2=stack2.call(depth0,{hash:{},data:data})}else{stack2=depth0.text;stack2=typeof stack2===functionType?stack2.apply(depth0):stack2}buffer+=escapeExpression(stack2)+"\r\n        </li>\r\n			";return buffer}function program3(depth0,data){return'class="app-nav-active"'}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-nav"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-nav"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-nav"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-newslist.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,functionType="function",escapeExpression=this.escapeExpression,self=this,blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){var buffer="",stack1,options;buffer+="\r\n	";stack1=helpers["if"].call(depth0,depth0.isall,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n		";options={hash:{},inverse:self.noop,fn:self.program(5,program5,data),data:data};if(stack1=helpers.children){stack1=stack1.call(depth0,options)}else{stack1=depth0.children;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers.children){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n	";stack1=helpers["if"].call(depth0,depth0.isall,{hash:{},inverse:self.noop,fn:self.program(10,program10,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n";return buffer}function program2(depth0,data){var buffer="",stack1;buffer+='\r\n	<div class="container app-newslist">\r\n	';stack1=helpers["if"].call(depth0,depth0.title,{hash:{},inverse:self.noop,fn:self.program(3,program3,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n  <ul >\r\n	";return buffer}function program3(depth0,data){var buffer="",stack1;buffer+='\r\n      <div class="app-newslist-mtitle">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</div>\r\n	";return buffer}function program5(depth0,data){var buffer="",stack1;buffer+="\r\n\r\n      ";stack1=helpers["if"].call(depth0,depth0.thumb,{hash:{},inverse:self.program(8,program8,data),fn:self.program(6,program6,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n\r\n		";return buffer}function program6(depth0,data){var buffer="",stack1;buffer+='\r\n        <li class="app-newslist-li" data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'" data-id="';if(stack1=helpers.id){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.id;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n	        <div class="app-newslist-imgbox">\r\n	            <img src="';if(stack1=helpers.thumb){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.thumb;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n	        </div>\r\n	        <span class="app-newslist-title">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</span>\r\n	        <p class="app-newslist-info">';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</p>\r\n	        <span class="app-newslist-date">';if(stack1=helpers.date){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.date;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</span>\r\n        </li>\r\n      ";return buffer}function program8(depth0,data){var buffer="",stack1;buffer+='\r\n        <li class="app-newslist-li nothumb" data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n	        <span class="app-newslist-title">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</span>\r\n	        <span class="app-newslist-date">';if(stack1=helpers.date){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.date;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</span>\r\n        </li>\r\n      ";return buffer}function program10(depth0,data){return'\r\n  </ul>\r\n  <div class="app-newslist-pullUp">\r\n    <span class="app-newslist-pullUpIcon"></span>\r\n    <span class="app-newslist-pullUpLabel">上拉获取更多...</span>\r\n  </div>\r\n  </div>\r\n	'}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-newslist"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-newslist"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-newslist"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-productlist.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,functionType="function",escapeExpression=this.escapeExpression,self=this,blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){var buffer="",stack1,options;buffer+='\r\n  <div class="container app-productlist">\r\n	  ';stack1=helpers["if"].call(depth0,depth0.title,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n\r\n	";options={hash:{},inverse:self.noop,fn:self.program(4,program4,data),data:data};if(stack1=helpers.children){stack1=stack1.call(depth0,options)}else{stack1=depth0.children;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers.children){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n  </div>\r\n";return buffer}function program2(depth0,data){var buffer="",stack1;buffer+='\r\n	  <div class="app-productlist-title">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</div>\r\n		";return buffer}function program4(depth0,data){var buffer="",stack1;buffer+='\r\n\r\n    <li class="app-productlist-li" data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n      <div class="app-productlist-imgbox">\r\n        <img src="';if(stack1=helpers.thumb){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.thumb;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n      </div>\r\n      <span>';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</span>\r\n    </li>\r\n\r\n	";return buffer}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-productlist"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-productlist"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-productlist"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-productlist2.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,functionType="function",escapeExpression=this.escapeExpression,self=this,blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){var buffer="",stack1,options;buffer+="\r\n	";stack1=helpers["if"].call(depth0,depth0.isall,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n	";options={hash:{},inverse:self.noop,fn:self.program(5,program5,data),data:data};if(stack1=helpers.children){stack1=stack1.call(depth0,options)}else{stack1=depth0.children;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers.children){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n	";stack1=helpers["if"].call(depth0,depth0.isall,{hash:{},inverse:self.noop,fn:self.program(10,program10,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n";return buffer}function program2(depth0,data){var buffer="",stack1;buffer+='\r\n    <div class="container app-newslist">\r\n		';stack1=helpers["if"].call(depth0,depth0.title,{hash:{},inverse:self.noop,fn:self.program(3,program3,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n    <ul >\r\n	";return buffer}function program3(depth0,data){var buffer="",stack1;buffer+='\r\n        <div class="app-newslist-mtitle">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</div>\r\n		";return buffer}function program5(depth0,data){var buffer="",stack1;buffer+="\r\n\r\n		";stack1=helpers["if"].call(depth0,depth0.thumb,{hash:{},inverse:self.program(8,program8,data),fn:self.program(6,program6,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n\r\n	";return buffer}function program6(depth0,data){var buffer="",stack1;buffer+='\r\n        <li class="app-newslist-li" data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n          <div class="app-newslist-imgbox">\r\n            <img src="';if(stack1=helpers.thumb){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.thumb;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n          </div>\r\n          <span class="app-newslist-title">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</span>\r\n          <p class="app-newslist-info">';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</p>\r\n          <span class="app-newslist-date">';if(stack1=helpers.date){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.date;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</span>\r\n        </li>\r\n		";return buffer}function program8(depth0,data){var buffer="",stack1;buffer+='\r\n        <li class="app-newslist-li nothumb" data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n          <span class="app-newslist-title">';if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</span>\r\n          <span class="app-newslist-date">';if(stack1=helpers.date){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.date;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</span>\r\n        </li>\r\n		";return buffer}function program10(depth0,data){return'\r\n    </ul>\r\n      <div class="app-newslist-pullUp">\r\n        <span class="app-newslist-pullUpIcon"></span>\r\n        <span class="app-newslist-pullUpLabel">上拉获取更多...</span>\r\n      </div>\r\n    </div>\r\n	'}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-productlist2"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-productlist2"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-productlist2"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-slider.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,self=this,helperMissing=helpers.helperMissing,functionType="function",escapeExpression=this.escapeExpression,blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){var buffer="",stack1,options;buffer+='\r\n  <div class="container app-slider">\r\n    <div class="app-slider-indicator">\r\n      <ul class="indicator">\r\n			  ';stack1=helpers.each.call(depth0,depth0.children,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data});if(stack1||stack1===0){buffer+=stack1}buffer+='\r\n      </ul>\r\n    </div>\r\n    <div class="container viewport app-slider-viewport">\r\n      <div class="wrapper app-slider-wrapper">\r\n				';options={hash:{},inverse:self.noop,fn:self.program(5,program5,data),data:data};if(stack1=helpers.children){stack1=stack1.call(depth0,options)}else{stack1=depth0.children;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers.children){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n      </div>\r\n    </div>\r\n  </div>\r\n";return buffer}function program2(depth0,data){var buffer="",stack1,stack2,options;buffer+="\r\n          <li ";options={hash:{},inverse:self.noop,fn:self.program(3,program3,data),data:data};stack2=(stack1=helpers.ifCond||depth0.ifCond,stack1?stack1.call(depth0,(stack1=data,stack1==null||stack1===false?stack1:stack1.index),"==",0,options):helperMissing.call(depth0,"ifCond",(stack1=data,stack1==null||stack1===false?stack1:stack1.index),"==",0,options));if(stack2||stack2===0){buffer+=stack2}buffer+="></li>\r\n			  ";return buffer}function program3(depth0,data){return'class="active"'}function program5(depth0,data){var buffer="",stack1;buffer+='\r\n          <div class="app-slider-item">\r\n            <img src="';if(stack1=helpers.thumb){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.thumb;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n\r\n            <div class="app-slider-item-div" data-url="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n              <span class="app-slider-item-label">';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</span>\r\n            </div>\r\n          </div>\r\n				";return buffer}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-slider"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-slider"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-slider"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-sub-page.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,self=this,functionType="function",blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){return"\r\n"}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-sub-page"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-sub-page"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-sub-page"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["doc-header.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression;buffer+="<title>";if(stack1=helpers.title){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.title;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'</title>\r\n<meta name="description" content="';if(stack1=helpers.description){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.description;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">';return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-content.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var stack1,options,self=this,functionType="function",blockHelperMissing=helpers.blockHelperMissing;function program1(depth0,data){return"\r\n\r\n"}options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data};if(stack1=helpers["app-content"]){stack1=stack1.call(depth0,options)}else{stack1=depth0["app-content"];stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(!helpers["app-content"]){stack1=blockHelperMissing.call(depth0,stack1,options)}if(stack1||stack1===0){return stack1}else{return""}})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-title.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression;buffer+='<div class="app-content-node app-title">\r\n  <h3>\r\n		';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"\r\n  </h3>\r\n</div>\r\n";return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-subtitle.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression;buffer+='<div class="app-content-node app-subtitle">\r\n  <span>\r\n	  ';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"\r\n  </span>\r\n</div>\r\n";return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-divider.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};return'<hr class="app-content-node app-divider">'})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-image.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression;buffer+='<div class="app-content-node app-image">\r\n  <img src="';if(stack1=helpers.src){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.src;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'" alt="';if(stack1=helpers.alt){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.alt;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">\r\n</div>';return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-text.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function";buffer+='<div class="app-content-node app-text">\r\n  <span>\r\n		';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}if(stack1||stack1===0){buffer+=stack1}buffer+="\r\n  </span>\r\n</div>\r\n";return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-link.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression;buffer+='<div class="app-content-node app-link">\r\n  <a href="';if(stack1=helpers.url){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.url;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</a>\r\n</div>";return buffer})}();!function(){var template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["app-phone.hbs"]=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"];helpers=this.merge(helpers,Handlebars.helpers);data=data||{};var buffer="",stack1,functionType="function",escapeExpression=this.escapeExpression;buffer+='<div class="app-content-node app-phone">\r\n	<div>\r\n    <a href="tel:';if(stack1=helpers.number){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.number;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+'">';if(stack1=helpers.text){stack1=stack1.call(depth0,{hash:{},data:data})}else{stack1=depth0.text;stack1=typeof stack1===functionType?stack1.apply(depth0):stack1}buffer+=escapeExpression(stack1)+"</a>\r\n	</div>\r\n	<hr>\r\n</div>";return buffer})}();