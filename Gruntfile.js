module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        clean: ['build'],
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'},
                ]
            }
        },
        bowercopy: {
            lib: {
                options: {
                    destPrefix: 'build/lib'
                },
                files: {
                    'require.js': 'requirejs/require.js',
                    'ember.js': 'ember/ember.js',
                    'jquery.js': 'jquery/dist/jquery.js',
                    'handlebars.js': 'handlebars/handlebars.js',
                    'stacktrace.js': 'stacktrace-js/stacktrace.js'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'bowercopy', 'karma']);
};
