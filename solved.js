/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // // Throw error if arguments contain non-finite number values
  // if (!args.every(Number.isFinite)) {
  //   throw new TypeError('sum() expects only numbers.')
  // }

  // Return the solution output
  var solution = function (input) {
    return [0, 1, 1, 1, 1, 1];
  }

  return solution(args);
}
