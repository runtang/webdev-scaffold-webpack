// 模块样式
require('./mod1.less');

// 符合commonjs规范的前端库
var $ = require('jquery');

// mustache前端模板
var tplMod1 = require('./mod1.hjs');
var data = {
	name: "Alex",
	sex: "Male",
	age: 16
};

$('#mod1').html(tplMod1(data));