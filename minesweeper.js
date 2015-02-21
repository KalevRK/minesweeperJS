// construct board
var Space = function(value, row, col) {
  this.value = value;
  this.row = row;
  this.col = col;
};

var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function(rowEl, row) {
    return _(_.range(n)).map(function(colEl, col) {
      return new Space(null, row, col);
    });
  });
};

var board = {};
board.size = 10;

var bomb = {};
bomb.locations = {};
bomb.quant = 10;

var bombRow, bombCol, bombLoc;
while (Object.keys(bomb.locations).length < 10) {
  bombRow = Math.floor(Math.random()*board.size);
  bombCol = Math.floor(Math.random()*board.size);
  bombLoc = [bombRow, bombCol];
  bomb.locations[JSON.stringify(bombLoc)] = bombLoc;
}
console.log(bomb.locations);

board.grid = makeEmptyMatrix(board.size);

_.each(bomb.locations, function(bombLoc) {
  board.grid[bombLoc[0]][bombLoc[1]].value = 9;
});

_.each(board.grid, function(rowArr, row) {
  _.each(rowArr, function(space, col) {
    space.value = countNeighborBombs(row, col);
  });
});
console.log(board.grid);

function countNeighborBombs(row, col) {
  var bombCount = 0;
  for (var i=row-1; i<=row+1; i++) {
    for (var j=col-1; j<=col+1; j++) {
      if (i>=0 && i<10 && j>=0 && j<10 && board.grid[i][j].value===9) {
        bombCount++;
      }
    }
  }
  return bombCount;
}


