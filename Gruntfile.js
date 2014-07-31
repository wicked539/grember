module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'},
                ]
            }
        },
        bowercopy: {
            libs: {
                options: {
                    destPrefix: 'build/libs'
                },
                files: {
                    'ember.js': 'ember/ember.js',
                    'jquery.js': 'jquery/dist/jquery.js',
                    'handlebars.js': 'handlebars/handlebars.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-karma');


    // Default task(s).
    grunt.registerTask('default', ['copy', 'bowercopy', 'karma']);
};
