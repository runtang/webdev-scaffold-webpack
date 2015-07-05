webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// 页面样式
	__webpack_require__(15);

	// 公共模块
	var clog = __webpack_require__(13);
	clog('profile page');



/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "body {\n\tpadding: 50px;\n  \tfont: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n}\n\na {\n  \tcolor: #00B7FF;\n}", ""]);

/***/ }

});