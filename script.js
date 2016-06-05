'use strict';

var fs = require('fs'),
    toSingleQuotes = require('to-single-quotes');

var input = fs.readFileSync('./src/input.js', 'utf-8'),
    result = toSingleQuotes(input),
    expectedResult = fs.readFileSync('./src/expected-result.js', 'utf-8');

console.log('input is:');
console.log(input);

console.log('result is:');
console.log(result);

if (result !== expectedResult) {
    console.log('result is incorrect. expected result is:');
    console.log(expectedResult);
}
else {
    console.log('this is the expected result!');
}
