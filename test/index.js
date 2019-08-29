/* ./test/index.js */

/* Fibonacci Answer Key */
const answerKey = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
console.log("answerKey        = " + answerKey)
console.log("answerKey.length = " + answerKey.length)

var solved = require('../solved');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;

describe('Answer Key Validation', function() {
  it('answer key has a .length of 20', function() {;
    assert.equal(answerKey.length, 20);
  });
  it('last answer key elements is 4181', function() {
    var answerKeyLastItem = answerKey[answerKey.length-1];
    assert.equal(answerKeyLastItem, 4181);
  });
});

describe('Computed Answer Validation', function() {
  var outputArray = solved(20);
  it('outputArray is 20 elements long', function() {
    assert.equal(outputArray.length, 20);
  });
  it('outputArray contains all the correct elements', function() {
    outputArray.indexOf(0).should.equal(0);
    outputArray.indexOf(5).should.equal(5);
    outputArray.indexOf(20).should.equal(4181);
  });
});
