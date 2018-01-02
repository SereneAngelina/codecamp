// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Array.prototype.reduce()

//Answer


function sym(args) {
  args = Array.prototype.slice.call(arguments);
  // Delete duplicate numbers in subArrays
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (args[i][j] === args[i][j+1]) {
        delete args[i][j];
      }
    }
  }
  // then concat subArrays successively with reduce, filtering duplicates after each iteration
  return args.reduce(function(a, b) {
    return a.concat(b).sort().filter(function(value, index, arr) {
      if (arr[index] != arr[index+1] && arr[index] != arr[index-1]) {
        return value;
      }
    });
  });
}


sym([1, 2, 3], [5, 2, 1, 4]);
