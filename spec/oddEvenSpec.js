var myCode = require('../oddEven');

describe("oddEven", function(){
  it ("returns the number which has the largest amount of steps", function(){
    var start = 4;

    var result = myCode.oddEven(start);

    expect(result).toEqual(3);
  });
  it ("returns the number which has the largest amount of steps, smae if at start", function(){
    var start = 3;

    var result = myCode.oddEven(start);

    expect(result).toEqual(3);
  });
})
