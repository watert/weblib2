module.exports = function(grunt){
	grunt.initConfig({
		requirejs:{
			compile:{
				options:{
					baseUrl:"./",
					appDir:"js/",
					modules:[{
						name:"base",
						exclude:["app/base"]
					}],
					mainConfigFile:"config.js",
					// name:"js/base",
					exclude:['app/base'],
					// modules:[{
					// 	name:"js/base",
					//     exclude:["app/base"]
					// }],
					dir:"js-built",
					// out:"builds.js"
				}
			}
		}
	});
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default',["requirejs"]);
};