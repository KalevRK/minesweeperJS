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


// Kalev
// track board settings
var boardSettings = {
    spaceHeight: '28',
    spaceWidth: '28'
}

// - bind board to DOM
d3.select('#gameTable').selectAll("tr")
    .data(board)
    .enter().append("tr")
    .selectAll("td.space")
    .data(function(d){return d;})
    .enter().append("td.space");
    // .attr('height', boardSettings.spaceHeight + 'px')
    // .attr('width', boardSettings.spaceWidth + 'px');

