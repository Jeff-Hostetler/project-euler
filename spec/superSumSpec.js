var myCode = require('../superSum');

describe("superSum", function() {
  it ("returns the  sum of an array of numbers", function(){
    var myArray = [10000000000, 10000000010, 10000000020]

    var result = myCode.superSum(myArray);

    expect(result).toEqual(30000000030);
  });
})

describe("firstTen", function() {
  it ("returns the first 10 digits of a large number", function(){
    var myNumber = 3.0000000003000;

    var result = myCode.firstTen(myNumber);

    expect(result).toEqual(3000000000);
  })

})
