// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global String Object
// String.prototype.split()
// Array.prototype.reverse()
// Array.prototype.join()
// Answer

function reverseString(str) {
  var revstr = [];

  revstr = str.split("");
  var res = revstr.reverse();
  return res.join("");
}

reverseString("Howdy");
