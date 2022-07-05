"use strict";
exports.__esModule = true;
var result = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); });
console.log(result);
