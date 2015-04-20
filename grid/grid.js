var pathCount = function(unitsPerSide) {
  var count = 1;
  for (var i = 0; i < unitsPerSide; i++) {
    count *= (2 * unitsPerSide) - i;
    count /= i + 1;
  };
  return count
};

console.log(pathCount(20));

module.exports = {
  pathCount: pathCount
}
