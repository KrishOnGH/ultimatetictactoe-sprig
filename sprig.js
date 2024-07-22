// define the sprites in our game
const borderhorizontal = "-";
const bordervertical = "|";
const bordercross = "/";
const tle = "a";
const tlc = "b";
const tlx = "c";
const tme = "d";
const tmc = "e";
const tmx = "f";
const tre = "g";
const trc = "h";
const trx = "i";
const mle = "j";
const mlc = "k";
const mlx = "l";
const mme = "m";
const mmc = "n";
const mmx = "o";
const mre = "p";
const mrc = "q";
const mrx = "r";
const ble = "s";
const blc = "t";
const blx = "u";
const bme = "v";
const bmc = "w";
const bmx = "x";
const bre = "y";
const brc = "z";
const brx = "1";
const tleh = "A";
const tlch = "B";
const tlxh = "C";
const tmeh = "D";
const tmch = "E";
const tmxh = "F";
const treh = "G";
const trch = "H";
const trxh = "I";
const mleh = "J";
const mlch = "K";
const mlxh = "L";
const mmeh = "M";
const mmch = "N";
const mmxh = "O";
const mreh = "P";
const mrch = "Q";
const mrxh = "R";
const bleh = "S";
const blch = "T";
const blxh = "U";
const bmeh = "V";
const bmch = "W";
const bmxh = "X";
const breh = "Y";
const brch = "Z";
const brxh = "!";

// assign bitmap art to each sprite
setLegend(
  [ borderhorizontal, bitmap`
................
................
................
................
................
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
................
................
................
................
................`],
  [ bordervertical, bitmap`
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....`],
  [ bordercross, bitmap`
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
.....000000.....
.....000000.....
.....000000.....
.....000000.....
.....000000.....`],
  [ tle, bitmap`
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
0000000000000000`],
  [ tlc, bitmap`
...............0
...............0
......0000.....0
.....0....0....0
....0......0...0
...0........0..0
..0..........0.0
..0..........0.0
..0..........0.0
..0..........0.0
...0........0..0
....0......0...0
.....0....0....0
......0000.....0
...............0
0000000000000000`],
  [ tlx, bitmap`
...............0
...............0
..0..........0.0
...0........0..0
....0......0...0
.....0....0....0
......0..0.....0
.......00......0
.......00......0
......0..0.....0
.....0....0....0
....0......0...0
...0........0..0
..0..........0.0
...............0
0000000000000000`],
  [ tme, bitmap`
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000`],
  [ tmc, bitmap`
0..............0
0..............0
0.....0000.....0
0....0....0....0
0...0......0...0
0..0........0..0
0.0..........0.0
0.0..........0.0
0.0..........0.0
0.0..........0.0
0..0........0..0
0...0......0...0
0....0....0....0
0.....0000.....0
0..............0
0000000000000000`],
  [ tmx, bitmap`
0..............0
0..............0
0.0..........0.0
0..0........0..0
0...0......0...0
0....0....0....0
0.....0..0.....0
0......00......0
0......00......0
0.....0..0.....0
0....0....0....0
0...0......0...0
0..0........0..0
0.0..........0.0
0..............0
0000000000000000`],
  [ tre, bitmap`
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0000000000000000`],
  [ trc, bitmap`
0...............
0...............
0.....0000......
0....0....0.....
0...0......0....
0..0........0...
0.0..........0..
0.0..........0..
0.0..........0..
0.0..........0..
0..0........0...
0...0......0....
0....0....0.....
0.....0000......
0...............
0000000000000000`],
  [ trx, bitmap`
0...............
0...............
0.0..........0..
0..0........0...
0...0......0....
0....0....0.....
0.....0..0......
0......00.......
0......00.......
0.....0..0......
0....0....0.....
0...0......0....
0..0........0...
0.0..........0..
0...............
0000000000000000`],
  [ mle, bitmap`
0000000000000000
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
0000000000000000`],
  [ mlc, bitmap`
0000000000000000
...............0
......0000.....0
.....0....0....0
....0......0...0
...0........0..0
..0..........0.0
..0..........0.0
..0..........0.0
..0..........0.0
...0........0..0
....0......0...0
.....0....0....0
......0000.....0
...............0
0000000000000000`],
  [ mlx, bitmap`
0000000000000000
...............0
..0..........0.0
...0........0..0
....0......0...0
.....0....0....0
......0..0.....0
.......00......0
.......00......0
......0..0.....0
.....0....0....0
....0......0...0
...0........0..0
..0..........0.0
...............0
0000000000000000`],
  [ mme, bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000`],
  [ mmc, bitmap`
0000000000000000
0..............0
0.....0000.....0
0....0....0....0
0...0......0...0
0..0........0..0
0.0..........0.0
0.0..........0.0
0.0..........0.0
0.0..........0.0
0..0........0..0
0...0......0...0
0....0....0....0
0.....0000.....0
0..............0
0000000000000000`],
  [ mmx, bitmap`
0000000000000000
0..............0
0.0..........0.0
0..0........0..0
0...0......0...0
0....0....0....0
0.....0..0.....0
0......00......0
0......00......0
0.....0..0.....0
0....0....0....0
0...0......0...0
0..0........0..0
0.0..........0.0
0..............0
0000000000000000`],
  [ mre, bitmap`
0000000000000000
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0000000000000000`],
  [ mrc, bitmap`
0000000000000000
0...............
0.....0000......
0....0....0.....
0...0......0....
0..0........0...
0.0..........0..
0.0..........0..
0.0..........0..
0.0..........0..
0..0........0...
0...0......0....
0....0....0.....
0.....0000......
0...............
0000000000000000`],
  [ mrx, bitmap`
0000000000000000
0...............
0.0..........0..
0..0........0...
0...0......0....
0....0....0.....
0.....0..0......
0......00.......
0......00.......
0.....0..0......
0....0....0.....
0...0......0....
0..0........0...
0.0..........0..
0...............
0000000000000000`],
  [ ble, bitmap`
0000000000000000
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0
...............0`],
  [ blc, bitmap`
0000000000000000
...............0
......0000.....0
.....0....0....0
....0......0...0
...0........0..0
..0..........0.0
..0..........0.0
..0..........0.0
..0..........0.0
...0........0..0
....0......0...0
.....0....0....0
......0000.....0
...............0
...............0`],
  [ blx, bitmap`
0000000000000000
...............0
..0..........0.0
...0........0..0
....0......0...0
.....0....0....0
......0..0.....0
.......00......0
.......00......0
......0..0.....0
.....0....0....0
....0......0...0
...0........0..0
..0..........0.0
...............0
...............0`],
  [ bme, bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0`],
  [ bmc, bitmap`
0000000000000000
0..............0
0.....0000.....0
0....0....0....0
0...0......0...0
0..0........0..0
0.0..........0.0
0.0..........0.0
0.0..........0.0
0.0..........0.0
0..0........0..0
0...0......0...0
0....0....0....0
0.....0000.....0
0..............0
0..............0`],
  [ bmx, bitmap`
0000000000000000
0..............0
0.0..........0.0
0..0........0..0
0...0......0...0
0....0....0....0
0.....0..0.....0
0......00......0
0......00......0
0.....0..0.....0
0....0....0....0
0...0......0...0
0..0........0..0
0.0..........0.0
0..............0
0..............0`],
  [ bre, bitmap`
0000000000000000
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............
0...............`],
  [ brc, bitmap`
0000000000000000
0...............
0.....0000......
0....0....0.....
0...0......0....
0..0........0...
0.0..........0..
0.0..........0..
0.0..........0..
0.0..........0..
0..0........0...
0...0......0....
0....0....0.....
0.....0000......
0...............
0...............`],
  [ brx, bitmap`
0000000000000000
0...............
0.0..........0..
0..0........0...
0...0......0....
0....0....0.....
0.....0..0......
0......00.......
0......00.......
0.....0..0......
0....0....0.....
0...0......0....
0..0........0...
0.0..........0..
0...............
0...............`],
  [ tleh, bitmap`
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
3333333333333333`],
  [ tlch, bitmap`
...............3
...............3
......3333.....3
.....3....3....3
....3......3...3
...3........3..3
..3..........3.3
..3..........3.3
..3..........3.3
..3..........3.3
...3........3..3
....3......3...3
.....3....3....3
......3333.....3
...............3
3333333333333333`],
  [ tlxh, bitmap`
...............3
...............3
..3..........3.3
...3........3..3
....3......3...3
.....3....3....3
......3..3.....3
.......33......3
.......33......3
......3..3.....3
.....3....3....3
....3......3...3
...3........3..3
..3..........3.3
...............3
3333333333333333`],
  [ tmeh, bitmap`
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3333333333333333`],
  [ tmch, bitmap`
3..............3
3..............3
3.....3333.....3
3....3....3....3
3...3......3...3
3..3........3..3
3.3..........3.3
3.3..........3.3
3.3..........3.3
3.3..........3.3
3..3........3..3
3...3......3...3
3....3....3....3
3.....3333.....3
3..............3
3333333333333333`],
  [ tmxh, bitmap`
3..............3
3..............3
3.3..........3.3
3..3........3..3
3...3......3...3
3....3....3....3
3.....3..3.....3
3......33......3
3......33......3
3.....3..3.....3
3....3....3....3
3...3......3...3
3..3........3..3
3.3..........3.3
3..............3
3333333333333333`],
  [ treh, bitmap`
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3333333333333333`],
  [ trch, bitmap`
3...............
3...............
3.....3333......
3....3....3.....
3...3......3....
3..3........3...
3.3..........3..
3.3..........3..
3.3..........3..
3.3..........3..
3..3........3...
3...3......3....
3....3....3.....
3.....3333......
3...............
3333333333333333`],
  [ trxh, bitmap`
3...............
3...............
3.3..........3..
3..3........3...
3...3......3....
3....3....3.....
3.....3..3......
3......33.......
3......33.......
3.....3..3......
3....3....3.....
3...3......3....
3..3........3...
3.3..........3..
3...............
3333333333333333`],
  [ mleh, bitmap`
3333333333333333
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
3333333333333333`],
  [ mlch, bitmap`
3333333333333333
...............3
......3333.....3
.....3....3....3
....3......3...3
...3........3..3
..3..........3.3
..3..........3.3
..3..........3.3
..3..........3.3
...3........3..3
....3......3...3
.....3....3....3
......3333.....3
...............3
3333333333333333`],
  [ mlxh, bitmap`
3333333333333333
...............3
..3..........3.3
...3........3..3
....3......3...3
.....3....3....3
......3..3.....3
.......33......3
.......33......3
......3..3.....3
.....3....3....3
....3......3...3
...3........3..3
..3..........3.3
...............3
3333333333333333`],
  [ mmeh, bitmap`
3333333333333333
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3333333333333333`],
  [ mmch, bitmap`
3333333333333333
3..............3
3.....3333.....3
3....3....3....3
3...3......3...3
3..3........3..3
3.3..........3.3
3.3..........3.3
3.3..........3.3
3.3..........3.3
3..3........3..3
3...3......3...3
3....3....3....3
3.....3333.....3
3..............3
3333333333333333`],
  [ mmxh, bitmap`
3333333333333333
3..............3
3.3..........3.3
3..3........3..3
3...3......3...3
3....3....3....3
3.....3..3.....3
3......33......3
3......33......3
3.....3..3.....3
3....3....3....3
3...3......3...3
3..3........3..3
3.3..........3.3
3..............3
3333333333333333`],
  [ mreh, bitmap`
3333333333333333
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3333333333333333`],
  [ mrch, bitmap`
3333333333333333
3...............
3.....3333......
3....3....3.....
3...3......3....
3..3........3...
3.3..........3..
3.3..........3..
3.3..........3..
3.3..........3..
3..3........3...
3...3......3....
3....3....3.....
3.....3333......
3...............
3333333333333333`],
  [ mrxh, bitmap`
3333333333333333
3...............
3.3..........3..
3..3........3...
3...3......3....
3....3....3.....
3.....3..3......
3......33.......
3......33.......
3.....3..3......
3....3....3.....
3...3......3....
3..3........3...
3.3..........3..
3...............
3333333333333333`],
  [ bleh, bitmap`
3333333333333333
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3
...............3`],
  [ blch, bitmap`
3333333333333333
...............3
......3333.....3
.....3....3....3
....3......3...3
...3........3..3
..3..........3.3
..3..........3.3
..3..........3.3
..3..........3.3
...3........3..3
....3......3...3
.....3....3....3
......3333.....3
...............3
...............3`],
  [ blxh, bitmap`
3333333333333333
...............3
..3..........3.3
...3........3..3
....3......3...3
.....3....3....3
......3..3.....3
.......33......3
.......33......3
......3..3.....3
.....3....3....3
....3......3...3
...3........3..3
..3..........3.3
...............3
...............3`],
  [ bmeh, bitmap`
3333333333333333
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3`],
  [ bmch, bitmap`
3333333333333333
3..............3
3.....3333.....3
3....3....3....3
3...3......3...3
3..3........3..3
3.3..........3.3
3.3..........3.3
3.3..........3.3
3.3..........3.3
3..3........3..3
3...3......3...3
3....3....3....3
3.....3333.....3
3..............3
3..............3`],
  [ bmxh, bitmap`
3333333333333333
3..............3
3.3..........3.3
3..3........3..3
3...3......3...3
3....3....3....3
3.....3..3.....3
3......33......3
3......33......3
3.....3..3.....3
3....3....3....3
3...3......3...3
3..3........3..3
3.3..........3.3
3..............3
3..............3`],
  [ breh, bitmap`
3333333333333333
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............
3...............`],
  [ brch, bitmap`
3333333333333333
3...............
3.....3333......
3....3....3.....
3...3......3....
3..3........3...
3.3..........3..
3.3..........3..
3.3..........3..
3.3..........3..
3..3........3...
3...3......3....
3....3....3.....
3.....3333......
3...............
3...............`],
  [ brxh, bitmap`
3333333333333333
3...............
3.3..........3..
3..3........3...
3...3......3....
3....3....3.....
3.....3..3......
3......33.......
3......33.......
3.....3..3......
3....3....3.....
3...3......3....
3..3........3...
3.3..........3..
3...............
3...............`]
);

// create game levels
let level = 0; // this tracks the level we are on
const levels = [
  map`
.-----------.
|adg|adg|adg|
|jmp|jmp|jmp|
|svy|svy|svy|
|---/---/---|
|adg|adg|adg|
|jmp|jmp|jmp|
|svy|svy|svy|
|---/---/---|
|adg|adg|adg|
|jmp|jmp|jmp|
|svy|svy|svy|
.-----------.`,
];

// set the map displayed to the current level
const currentLevel = levels[level];
setMap(levels[level]);

function upperCaseCharacter(char) {
  if (char != '1') {
    char = char.toUpperCase()
  } else { 
    char = '!'
  }

  return char
}

function lowerCaseCharacter(char) {
  if (char != '!') {
    char = char.toLowerCase()
  } else { 
    char = '1'
  }

  return char
}

function setSprite(x, y, newsprite) {
  x -= 1;
  y -= 1;

  // Determine which 3x3 board we are in
  const boardX = Math.floor(x / 3);
  const boardY = Math.floor(y / 3);

  // Determine the local position within the 3x3 board
  const localX = x % 3;
  const localY = y % 3;

  // Adjust y for the offset and the borders
  let adjustedY = 1 + boardY * 4 + localY +1;

  // Adjust x for the offset
  let adjustedX = 1 + boardX * 4 + localX;

  // Split the level map into rows
  const rows = levels[level].split('\n');

  // Update the map with the new sprite
  rows[adjustedY] = 
    rows[adjustedY].slice(0, adjustedX) +
    newsprite +
    rows[adjustedY].slice(adjustedX + 1);

  // Join the rows back into a single string
  levels[level] = rows.join('\n');
  setMap(levels[level]);
}

function getSprite(x, y) {
  x -= 1;
  y -= 1;

  // Determine which 3x3 board we are in
  const boardX = Math.floor(x / 3);
  const boardY = Math.floor(y / 3);

  // Determine the local position within the 3x3 board
  const localX = x % 3;
  const localY = y % 3;

  // Adjust y for the offset and the borders
  let adjustedY = 1 + boardY * 4 + localY + 1;

  // Adjust x for the offset
  let adjustedX = 1 + boardX * 4 + localX;

  // Split the level map into rows
  const rows = levels[level].split('\n');

  // Return the sprite at the calculated position
  return rows[adjustedY][adjustedX];
}

function highlightBox(boxx, boxy) {
  for (let x = (boxx*3-2); x < boxx*3+1; x++) {
    for (let y = (boxy*3-2); y < boxy*3+1; y++) {
      setSprite(x, y, upperCaseCharacter(getSprite(x, y)))
    }
  }
}

function highlightSquare(squarex, squarey) {
  setSprite(squarex, squarey, upperCaseCharacter(getSprite(squarex, squarey)))
}

function setSquareValue(x, y, circleOrX) {
  const charstr='abcdefghijklmnaopqrstuvwxyz1ABCDEFGHIJKLMNAOPQRSTUVWXYZ!'
  const empty='adgjmpsvyADGJMPSVY'
  let value = charstr.indexOf(getSprite(x, y))
  let xgrid
  let ygrid
  
  if (x > 0 && x < 4) {xgrid = 1}
  else if (x > 3 && x < 7) {xgrid = 2}
  else if (x > 6 && x < 10) {xgrid = 3}
  if (y > 0 && y < 4) {ygrid = 1}
  else if (y > 3 && y < 7) {ygrid = 2}
  else if (y > 6 && y < 10) {ygrid = 3}
  const gridpos = (ygrid-1)*3+xgrid

  if (empty.includes(charstr[value])) {
    if (circleOrX == 'circle') {
      value += 1
      grid[gridpos-1][ ((y - (ygrid-1)*3) -1) * 3 + (x - (xgrid-1)*3) ] == 1
    } else if (circleOrX == 'x') {
      value += 2
      grid[gridpos-1][(y-1)*3+x] == 2
    }
    setSprite(x, y, charstr[value])
  }

  setSprite(x, y, charstr[value])
}

function unHighlight() {
  for (let x = 1; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
      setSprite(x, y, lowerCaseCharacter(getSprite(x, y)))
    }
  }
}

function responseAlgo(grid, lastmovex, lastmovey) {
  let xgrid
  let ygrid
  
  if (lastmovex > 0 && lastmovex < 4) {xgrid = 1}
  else if (lastmovex > 3 && lastmovex < 7) {xgrid = 2}
  else if (lastmovex > 6 && lastmovex < 10) {xgrid = 3}
  if (lastmovey > 0 && lastmovey < 4) {ygrid = 1}
  else if (lastmovey > 3 && lastmovey < 7) {ygrid = 2}
  else if (lastmovey > 6 && lastmovey < 10) {ygrid = 3}

  const lastmovesquarex = lastmovex - (xgrid-1)*3
  const lastmovesquarey = lastmovey - (ygrid-1)*3
  
  const gridpos = (lastmovesquarey-1)*3+lastmovesquarex
  
  let available_moves = []
  for (let i = 1; i <= 9; i++) {
    if (grid[gridpos-1][i-1] === 0) {
      const responsey = Math.ceil(i / 3);
      const responsex = i - (responsey - 1) * 3;
      available_moves.push([xgrid * 3 - 3 + responsex, ygrid * 3 - 3 + responsey])
    }
  }
  if (available_moves.length !== 0) {
    return available_moves[Math.floor(Math.random()*available_moves.length)];
  } 
  else {
    for (let gridpos = 1; gridpos <= 9; gridpos++) {
      const xgrid = Math.ceil(gridpos / 3);
      const ygrid = gridpos - (xgrid - 1) * 3;
      for (let i = 1; i <= 9; i++) {
        if (grid[gridpos-1][i-1] === 0) {
          const responsey = Math.ceil(i / 3);
          const responsex = i - (responsey - 1) * 3;
          available_moves.push([xgrid * 3 - 3 + responsex, ygrid * 3 - 3 + responsey])
        }
      }
    }
    return available_moves[Math.floor(Math.random()*available_moves.length)];
  }
}

let highlightedX = 2
let highlightedY = 2
let selectingSquare = false
let grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
let player = 'o'
let squareX = 2
let squareY = 2
highlightBox(highlightedX, highlightedY)

// Input handlers for WASD movement
onInput("w", () => {
  if (selectingSquare && squareY > 1) {
    unHighlight();
    squareY--;
    highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
  } else if (!selectingSquare && highlightedY > 1) {
    unHighlight();
    highlightedY--;
    highlightBox(highlightedX, highlightedY);
  }
});

onInput("s", () => {
  if (selectingSquare && squareY < 3) {
    unHighlight();
    squareY++;
    highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
  } else if (!selectingSquare && highlightedY < 3) {
    unHighlight();
    highlightedY++;
    highlightBox(highlightedX, highlightedY);
  }
});

onInput("a", () => {
  if (selectingSquare && squareX > 1) {
    unHighlight();
    squareX--;
    highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
  } else if (!selectingSquare && highlightedX > 1) {
    unHighlight();
    highlightedX--;
    highlightBox(highlightedX, highlightedY);
  }
});

onInput("d", () => {
  if (selectingSquare && squareX < 3) {
    unHighlight();
    squareX++;
    highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
  } else if (!selectingSquare && highlightedX < 3) {
    unHighlight();
    highlightedX++;
    highlightBox(highlightedX, highlightedY);
  }
});

onInput("i", () => {
  selectingSquare = !selectingSquare;
  unHighlight();
  squareX = 2;
  squareY = 2;
  if (selectingSquare) {
    highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
  } else {
    highlightBox(highlightedX, highlightedY);
  }
});

onInput("l", () => {
  if (selectingSquare) {
    const x = highlightedX * 3 - 3 + squareX
    const y = highlightedY * 3 - 3 + squareY
    const charstr='abcdefghijklmnaopqrstuvwxyz1ABCDEFGHIJKLMNAOPQRSTUVWXYZ!'
    const empty='adgjmpsvyADGJMPSVY'
    let value = charstr.indexOf(getSprite(x, y))

    if (empty.includes(charstr[value])) {
      setSquareValue(x, y, player == 'o' ? 'circle' : 'x')
  
      const response = responseAlgo(grid, highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY)
      setSquareValue(response[0], response[1], player == 'o' ? 'x' : 'circle')
    }
  }
});