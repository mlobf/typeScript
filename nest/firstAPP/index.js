"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    //console.log(response.data)
    var todo = response.data;
    console.log(todo);
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("This is a beatifull report ".concat(ID));
    console.log("This is a title report ".concat(title));
    console.log("This is a finished report ".concat(finished));
});
