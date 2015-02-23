var exports = module.exports = {};

exports.oddEven = function(startNumber){
  var result_steps = 0;
  var result = 0;
    for(i = startNumber; i > 0; i--){
      var steps = 0;
      var counter = i;
      while(counter > 1 ) {
        if (counter % 2 == 0){
          counter = counter/2;
          steps += 1
        }
        else {
          counter = 3*counter + 1;
          steps +=1;
        }
      }
      if (steps > result_steps) {
        result_steps = steps;
        result = i;
      }
    }
  return result
}


// console.log(oddEven(999999));





// n->n/2 (n is even)
// n->3n+1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following
// sequence:
//                   13->40->20->10->5->16->8->4->2->1
//
// It can be seen that this sequence (starting at 13 and finishing at 1)
// contains 10 terms. Although it has not been proved yet (Collatz Problem),
// it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
