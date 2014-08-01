require(['config'], function() {
    require(['ember', 'modules/mymodule'], function(Ember, MyModule) {
        console.log(MyModule.sayHelloWorld());

        var emberApp = Ember.Application.create();

        emberApp.Router.map(function() {
            this.route('hello-template', { path: '/' });
            this.route('foo-template', { path: '/foo' });
        });
    });
});

