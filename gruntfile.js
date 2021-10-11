module.exports = function(grunt) {
    grunt.initConfig({
		sass: {			
            dist: {
				options: {
					outputStyle: 'compressed'
				},
                files: [{
                    'dist/assets/css/style.min.css':                   'scss/style.scss', 	                        /* 'All main SCSS' */
				}]
            }
        },                   
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);
    grunt.registerTask("buildjs", ["uglify"]);
};
