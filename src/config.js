require.config({
    paths: {
        ember: 'lib/ember',
        jquery: 'lib/jquery',
        handlebars: 'lib/handlebars'
    },
    shim: {
        ember: {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        }
    }
});