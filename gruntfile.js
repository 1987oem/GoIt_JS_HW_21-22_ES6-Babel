module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'ES6/dist/app.js': 'ES6/src/script.js'
                }
            }
        },
        watch: {
            babel: {
                files: 'ES6/src/script.js',
                tasks: ['babel']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ['babel']);
};