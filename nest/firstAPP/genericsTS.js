// Concept of Generics
// Generic Type is a type wish is kind of connected with somo other type and
//      is very flexble regarding wich exact type that other type is.
// We can better type safety usin generic types
//
var myArr = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 2000);
});
promise.then(function () { });
