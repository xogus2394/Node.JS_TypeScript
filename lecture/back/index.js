"use strict";
exports.__esModule = true;
var express = require("express"); //글자수 적다고 as를 빼지말라 이론을 이해하고 사용하세요
var app = express();
var prod = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 3065);
app.get('/', function (req, res, next) {
    res.send('react nodevird 백엔드 정상 작동');
});
app.listen(app.get('port'), function () {
    console.log('sever is running on ${process.env.PORT}');
});
