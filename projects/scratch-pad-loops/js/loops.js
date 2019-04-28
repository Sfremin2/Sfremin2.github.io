// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];
  
  for (var key in object) {
    arr.push(key);
  }
  
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  /* Comment from Ben:
  nice use of function calls as an expression here!
  
  I would recommend, however, that when calling functions that return some
  data that you want access to that you only call it once and save the 
  result in a variable. Calling a function uses resources (memory) and reducing 
  the resources used is always a goal. I would rewrite your solution like so:
  
    var keys = getObjectKeys(object);
    for (var i = 0; i < keys.length; i++) {
      console.log(keys[i]);
    }
  
  In regards to using helper functions, we can further simplify this solution. 
  You are already using getObjectKeys to get an Array of keys from the object.
  printArrayValues() will print any Array so you can just pass in the keys
  array to printArrayValues:
  
    var keys = getObjectKeys(object);
    printArrayValues(keys);
  
  or event shorter...
  
    printArrayValues(getObjectKeys(object));
  
  */
  printArrayValues(getObjectKeys(object));
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  /* Comment from Ben:
  
  Same idea as printObjectKeys here
  */
  printArrayValues(getObjectValues(object));
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  /* Comment from ben:
  
  Excellent use of getObjectKeys!
  */
  return getObjectKeys(object).length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  /* What can you do here? */
    printArrayValuesInReverse(getObjectValues(object));
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.getObjectValues = getObjectValues;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
