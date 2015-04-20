var count = function(number) {
  var count = 1;
  var runningTotal = number;

  while (runningTotal != 1) {
    if (runningTotal % 2 === 0) {
      runningTotal = runningTotal/2;
      count += 1;
    } else {
      runningTotal = (3*runningTotal) + 1;
      count +=1;
    }
  };

  return count;
};

var findHighest = function(range) {
  var currentCount = count(range);
  var currentWinner = range;
  for (var i = range; i > 0; i--) {
    if (count(i) > currentCount) {
      currentCount = count(i);
      currentWinner = i;
    }
  };
  return currentWinner;
};

console.log(findHighest(1000000));

module.exports = {
  count: count,
  findHighest: findHighest
}



//
// The following iterative sequence is defined for the set of positive
// integers:
//
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
//
// NOTE: Once the chain starts the terms are allowed to go above one million.
//
// To work on a solution you will need to create a file with your preferred language. The solution should be logged to stdout and once you think you have a working solution, use `challenge verify [file]` to pass the exercise.
