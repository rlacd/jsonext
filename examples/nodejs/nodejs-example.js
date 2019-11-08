/*
JSONext NodeJS example. Copyright (C) techspider 2019.
Licensed under GNU GPLv3.
*/

var JSONext = require("../../jsonext");
var fs = require('fs');
var config = JSONext.parse(fs.readFileSync('./test.jsone', 'utf-8'));

console.log(config);