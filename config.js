require.config({
	baseUrl:"/weblib2/",
	shim: {
		"backbone":["underscore"],
		"jquery-bbq-deparam":["jquery"],
		"bootstrap":{
			init:function(){ require.loadCSS(["bootstrap"]); }
		},
		"swiper":{
			init:function(){ require.loadCSS(["bower_components/swpier/dist/idangerous.swiper"]); }
		}
	},
	paths: {
		backbone: "bower_components/backbone/backbone",
		underscore: "bower_components/underscore/underscore",
		jquery: "bower_components/jquery/dist/jquery",
		"jquery-bbq-deparam": "bower_components/jquery-bbq-deparam/jquery-deparam",
		marked: "bower_components/marked/lib/marked",
		swiper: "bower_components/swpier/dist/idangerous.swiper.min.js",
		bootstrap:"bower_components/bootstrap/dist/js/bootstrap.min"
	}
});
require.loadCSS = function(cssList){
	require(["app/css"],function(css){
		css(cssList);
	})
};
define("font-awesome",function(){
	require(["app/css"],function(css){
		css(["font-awesome"]);
	})
});