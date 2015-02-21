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
  console.log(bombLoc[0], bombLoc[1], board.grid[bombLoc[0]][bombLoc[1]].value);
});
console.log(board.grid);

_.each(board.grid, function(rowArr, row) {
  _.each(rowArr, function(space, col) {
    if (space.value !== 9) {
      space.value = countNeighborBombs(row, col);
    }
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

// Kalev
// track board settings
var boardSettings = {
    spaceHeight: '28',
    spaceWidth: '28'
}

// - bind board to DOM
d3.select('#gameTable')
    .selectAll("tr")
    .data(board.grid)
    .enter().append("tr")

    .selectAll("td.space")
    .data(function(d){return d;})
    .enter().append("td.space")
    //.style("visibility", 'hidden')
    .style("border", "1px black solid")
    .style("padding", "10px")
    .text(function(d){return d.value;})
    .style("font-size", "12px")
    .style("color", function(d) {
      if (d.value === 9) {
        return 'red';
      }
      else if (d.value === 0) {
        return 'blue';
      }
      else if (d.value === 1) {
        return 'orange';
      }
      else if (d.value === 2) {
        return 'green';
      }
      else if (d.value === 3) {
        return 'brown';
      }
      else if (d.value === 4) {
        return 'gray';
      }
      else if (d.value === 5) {
        return 'yellow';
      }
      else if (d.value === 6) {
        return 'purple';
      }
      else if (d.value === 7) {
        return 'black';
      }
      else if (d.value === 8) {
        return 'black';
      }
    });

d3.selectAll('td.space')
 .on('click', function(d) {
   d3.select(this).style("visibility", "visible");
 })

