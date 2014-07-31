require(['config'], function() {
    require(['ember', 'modules/mymodule'], function(Ember, MyModule) {
        console.log(MyModule.sayHelloWorld());

        var emberApp = Ember.Application.create();
    });
});

