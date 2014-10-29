require(['config'], function() {
    require(['ember', 'modules/mymodule'], function(Ember, MyModule) {
        var emberApp = Ember.Application.create();

        emberApp.Router.map(function() {
            this.route('start', { path: '/' });
            this.route('foo', { path: '/foo' });
            this.route('bar', { path: '/bar' });
            this.route('baz', { path: '/baz' });
        });

        // this works by naming convention:
        // the route to template 'foo' is matched to FooRoute
        emberApp.FooRoute = Ember.Route.extend({
            model: function() {
                return [
                    { name: 'yo!' },
                    { name: 'heribert' },
                    { name: 'fridolin' }
                ];
            }
        });

        emberApp.BarRoute = Ember.Route.extend({
            model: function() {
                return {
                    result: MyModule.sayHelloWorld()
                };
            }
        });

        emberApp.BazRoute = Ember.Route.extend({
            model: function() {
                return {
                    result: MyModule.doSomethingWrong()
                };
            }
        });
    });
});

