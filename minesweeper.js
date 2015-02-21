// construct board
var Space = function(value, xloc, yloc) {
  this.value = value;
  this.xloc = xloc;
  this.yloc = yloc;
};

var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function(rowEl, row) {
    return _(_.range(n)).map(function(colEl, col) {
      return new Space(null, col, row);
    });
  });
};

var bombLocations = [];



var board = makeEmptyMatrix(10);
console.log(board);



