define([], function() {
    return {
        sayHelloWorld: function() {
            return 'hello world';
        },
        doSomethingWrong: function() {
            throwAnException();
        }
    }

    function throwAnException() {
        throw 'this went wrong';
    };
});