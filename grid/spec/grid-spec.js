var grid = require('../grid.js');

describe('pathCount', function() {
  it('returns 2 for a 1X1 grid', function() {
    expect(grid.pathCount(1)).toBe(2);
  });

  it('returns 6 for a 2X2 grid', function() {
    expect(grid.pathCount(2)).toBe(6);
  });

  it('returns 137846528820 for a 20X20 grid', function() {
    expect(grid.pathCount(20)).toBe(137846528820);
  })
});



// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
//
// How many routes are there through a 20 * 20 grid?
