module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            options: {
                sourceMap: true,
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'pub/css/responsive-style.min.css': ['assets/dist/css/responsive-style-processed.css']
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')(
                        {overrideBrowsers: ['last 2 versions', 'ie 11']
                        }), // add vendor prefixes
                ]
            },
            dist: {
                src: 'assets/dist/css/responsive-style.css',
                dest: 'assets/dist/css/responsive-style-processed.css'
            }
        }
    });


    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['postcss', 'cssmin']);

};