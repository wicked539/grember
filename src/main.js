require(['config'], function() {
    require(['ember', 'modules/mymodule'], function(Ember, MyModule) {
        console.log(MyModule.sayHelloWorld());

        var emberApp = Ember.Application.create();

        emberApp.Router.map(function() {
            this.route('start', { path: '/' });
            this.route('foo', { path: '/foo' });
        });

        emberApp.FooRoute = Ember.Route.extend({
            model: function() {
                return [
                    { name: 'yo!' },
                    { name: 'heribert' },
                    { name: 'fridolin' }
                ];
            }
        });
    });
});

