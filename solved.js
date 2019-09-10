/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);
  console.log("args = " + args)
  var fibCache = {}
  var fibOutputArray = [];

  const fib = function(n) {
    if( n>=2 && fibCache[n] ) { return fibCache[n] }

    if(n===0) {
      if( fibCache[n] ) { return fibCache[n] }
      fibCache[n] = 0
      return 0

    } else if( n===1 || n===2 ) {
      if( fibCache[n] ) { return fibCache[n] }
      fibCache[n] = 1
      return 1
    }
    
    // Optimized to lookup previous values in an object.
    if( fibCache[n] ) { return fibCache[n] }/**/
    console.log(`Fib(${n}) calculating...`);
    
    let m = fib(n-1) + fib(n-2)
    fibCache[n] = m;

    return m

  };

  const fibber = (x) => {
    for(var i=0; i<x; i++){
      console.log(`${i}: ${fib(i)}`);
    }
  }

  const main = (args) => {
    fibber(args)

    for(let [key, value] of Object.entries(fibCache) ) {
      console.log(`>>> ${key}: ${value}`);
      fibOutputArray[key] = Number(value);
    }

    console.log("fibOutputArray = " + fibOutputArray + "; Length = " + fibOutputArray.length)

    return fibOutputArray;
  }

  return main(args)
}
