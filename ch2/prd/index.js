"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  Setup Bable  with Express JS
// const express = require('express')
var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello Express ch2 !! Welcome your friend ankit mishra!');
});
app.listen(port, function () {
  console.log("running..............ch2  http://localhost:".concat(port));
});