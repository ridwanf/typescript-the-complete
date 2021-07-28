"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var _a = res.data, id = _a.id, title = _a.title, completed = _a.completed;
    console.log("\n    The Todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is it finished?: " + completed + "\n  ");
});
