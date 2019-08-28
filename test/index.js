/* ./test/index.js */

var chai = require('chai'); // Only required for headless testing - "> mocha"

var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});

