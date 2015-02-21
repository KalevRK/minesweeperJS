# minesweeperJS
Recreation of minesweeper using JS.

Tasks:

# Model
Construct nxm board --> 2D array with objects {bomb: true, value: 4, xloc: 1, yloc: 2}
Randomly place b bombs
Iterate through array and count neighboring bombs

# View
<div> for each element

ID=location

Classes:
Unopened
- blank
- flagged
Opened
- open* (* is 0 through 8)
- bombrevealed
- bombdeath



