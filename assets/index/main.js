// 页面样式
require('./main.css');

// 子模块
require('./mod1');

// 公共模块
var clog = require('../common/clog');
clog('main init');

// 异步加载一个模块
require.ensure([], function() { 
	var cwarn = require('../common/cwarn');
	cwarn('async load');
});