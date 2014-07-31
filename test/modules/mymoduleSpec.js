define(['modules/mymodule'], function(MyModule) {
    describe('MyModule', function() {
        it('says hello world', function() {
            expect(MyModule.sayHelloWorld()).toEqual('hello world');
        });
    });
});