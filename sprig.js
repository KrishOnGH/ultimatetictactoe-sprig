// define the sprites in our game
const borderhorizontal = "-";
const bordervertical = "|";
const bordercross = "/";
const owin1 = "2"
const owin2 = "3"
const owin3 = "4"
const owin4 = "5"
const owin5 = "6"
const owin6 = "7"
const owin7 = "8"
const owin8 = "9"
const xwin1 = "@"
const xwin2 = "#"
const xwin3 = "$"
const draw1 = "*"
const draw2 = "("
const draw3 = ")"
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
  [ owin1, bitmap`
................
..............77
............77..
..........77....
.........7......
........7.......
.......7........
......7.........
.....7..........
....7...........
...7............
...7............
..7.............
..7.............
.7..............
.7..............`],
  [ owin2, bitmap`
7777777777777777
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`],
  [ owin3, bitmap`
................
77..............
..77............
....77..........
......7.........
.......7........
........7.......
.........7......
..........7.....
...........7....
............7...
............7...
.............7..
.............7..
..............7.
..............7.`],
  [ owin4, bitmap`
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7
...............7`],
  [ owin5, bitmap`
..............7.
..............7.
.............7..
.............7..
............7...
............7...
...........7....
..........7.....
.........7......
........7.......
.......7........
......7.........
....77..........
..77............
77..............
................`],
  [ owin6, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
7777777777777777`], 
  [ owin7, bitmap`
.7..............
.7..............
..7.............
..7.............
...7............
...7............
....7...........
.....7..........
......7.........
.......7........
........7.......
.........7......
..........77....
............77..
..............77
................`],
  [ owin8, bitmap`
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............
7...............`],
  [ xwin1, bitmap`
9...............
.9..............
..9.............
...9............
....9...........
.....9..........
......9.........
.......9........
........9.......
.........9......
..........9.....
...........9....
............9...
.............9..
..............9.
...............9`],
  [ xwin2, bitmap`
...............9
..............9.
.............9..
............9...
...........9....
..........9.....
.........9......
........9.......
.......9........
......9.........
.....9..........
....9...........
...9............
..9.............
.9..............
9...............`],
  [ xwin3, bitmap`
9..............9
.9............9.
..9..........9..
...9........9...
....9......9....
.....9....9.....
......9..9......
.......99.......
.......99.......
......9..9......
.....9....9.....
....9......9....
...9........9...
..9..........9..
.9............9.
9..............9`],
  [ draw1, bitmap`
4444444444444444
4444444444444444
................
................
................
................
................
................
................
................
................
................
................
................
................
................`],
  [ draw2, bitmap`
4444444444444444
4444444444444444
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......`],
  [ draw3, bitmap`
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......
.......44.......`],
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

let game = 0;
const screens = [
  map`
................
................
................
................
................
................
................
................
................
................
................
................
................`,
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
  map`
................
................
................
................
................
................
................
................
................
................
................
................
................`,
];
addText("Super Tic Tac Toe!", { 
  x: 1,
  y: 7,
  color: color`3`
})
addText("Press J to Start", { 
  x: 2,
  y: 9,
  color: color`1`
})

const originalScreen = screens[1];
setMap(screens[game]);

// Basic screen control functions
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

  // Split the game map into rows
  const rows = screens[game].split('\n');

  // Update the map with the new sprite
  rows[adjustedY] = 
    rows[adjustedY].slice(0, adjustedX) +
    newsprite +
    rows[adjustedY].slice(adjustedX + 1);

  // Join the rows back into a single string
  screens[game] = rows.join('\n');
  setMap(screens[game]);
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

  // Split the game map into rows
  const rows = screens[game].split('\n');

  // Return the sprite at the calculated position
  return rows[adjustedY][adjustedX];
}

// Selection highlighting, win/lose/draw, and X/O render functions
function highlightSquare(squarex, squarey) {
  setSprite(squarex, squarey, upperCaseCharacter(getSprite(squarex, squarey)))
}

function highlightBox(boxx, boxy) {
  for (let x = (boxx*3-2); x < boxx*3+1; x++) {
    for (let y = (boxy*3-2); y < boxy*3+1; y++) {
      setSprite(x, y, upperCaseCharacter(getSprite(x, y)))
    }
  }
}

function unHighlight() {
  for (let x = 1; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
      setSprite(x, y, lowerCaseCharacter(getSprite(x, y)))
    }
  }
}

function setSquareValue(x, y, circleOrX) {
  const charstr='abcdefghijklmnopqrstuvwxyz1ABCDEFGHIJKLMNOPQRSTUVWXYz!'
  const empty='adgjmpsvyADGJMPSVY'
  let value = charstr.indexOf(getSprite(x, y))
  const xgrid = Math.ceil(x / 3);
  const ygrid = Math.ceil(y / 3);

  if (empty.includes(charstr[value])) {
    gridpos = ygrid*3-3+xgrid
    if (circleOrX == 'circle') {
      value += 1
      grid[gridpos-1][ ((y - (ygrid-1)*3) -1) * 3 + (x - (xgrid-1)*3) - 1 ] = 1
    } else if (circleOrX == 'x') {
      value += 2
      grid[gridpos-1][ ((y - (ygrid-1)*3) -1) * 3 + (x - (xgrid-1)*3) -1 ] = 2
    }
    setSprite(x, y, charstr[value])
  }
}

function setBoxValue(gridpos, value) {
  let squarePositions = []
  const gridx = (gridpos-1) % 3 + 1;
  const gridy = Math.floor((gridpos-1) / 3) + 1;

  // Find all square coordinates inside box
  for (let y = (gridy*3-2); y < gridy*3+1; y++) {
    for (let x = (gridx*3-2); x < gridx*3+1; x++) {
      squarePositions.push([x, y])
    }
  }

  if (value == 0) {
    // Tie
    setSprite(squarePositions[0][0], squarePositions[0][1], '*')
    setSprite(squarePositions[1][0], squarePositions[1][1], '(')
    setSprite(squarePositions[2][0], squarePositions[2][1], '*')
    setSprite(squarePositions[3][0], squarePositions[3][1], '.')
    setSprite(squarePositions[4][0], squarePositions[4][1], ')')
    setSprite(squarePositions[5][0], squarePositions[5][1], '.')
    setSprite(squarePositions[6][0], squarePositions[6][1], '.')
    setSprite(squarePositions[7][0], squarePositions[7][1], ')')
    setSprite(squarePositions[8][0], squarePositions[8][1], '.')
  } else if (value == 1) {
    // O wins
    setSprite(squarePositions[0][0], squarePositions[0][1], '2')
    setSprite(squarePositions[1][0], squarePositions[1][1], '3')
    setSprite(squarePositions[2][0], squarePositions[2][1], '4')
    setSprite(squarePositions[3][0], squarePositions[3][1], '9')
    setSprite(squarePositions[4][0], squarePositions[4][1], '.')
    setSprite(squarePositions[5][0], squarePositions[5][1], '5')
    setSprite(squarePositions[6][0], squarePositions[6][1], '8')
    setSprite(squarePositions[7][0], squarePositions[7][1], '7')
    setSprite(squarePositions[8][0], squarePositions[8][1], '6')
  } else if (value == 2) {
    // X wins
    setSprite(squarePositions[0][0], squarePositions[0][1], '@')
    setSprite(squarePositions[1][0], squarePositions[1][1], '.')
    setSprite(squarePositions[2][0], squarePositions[2][1], '#')
    setSprite(squarePositions[3][0], squarePositions[3][1], '.')
    setSprite(squarePositions[4][0], squarePositions[4][1], '$')
    setSprite(squarePositions[5][0], squarePositions[5][1], '.')
    setSprite(squarePositions[6][0], squarePositions[6][1], '#')
    setSprite(squarePositions[7][0], squarePositions[7][1], '.')
    setSprite(squarePositions[8][0], squarePositions[8][1], '@')
  }
}

function win() {
  screens[1] = originalScreen
  addText("You Win!", { 
    x: 6,
    y: 7,
    color: color`9`
  })
  addText("Press J for Menu", { 
    x: 2,
    y: 9,
    color: color`1`
  })
  game = 2
  setMap(screens[game])
}

function lose() {
  screens[1] = originalScreen
  addText("You Lose", { 
    x: 6,
    y: 7,
    color: color`3`
  })
  addText("Press J for Menu", { 
    x: 2,
    y: 9,
    color: color`1`
  })
  game = 2
  setMap(screens[game])
}

function draw() {
  screens[1] = originalScreen
  addText("Draw", { 
    x: 8,
    y: 7,
    color: color`0`
  })
  addText("Press J for Menu", { 
    x: 2,
    y: 9,
    color: color`1`
  })
  game = 2
  setMap(screens[game])
}

// Game state and response algorithm functions
function checkWinBox(gridpos) {
  // Calculate the 3x3 grid squares
  let squares = grid[gridpos-1]
  let winSetups = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let oSquares = []
  let xSquares = []

  for (let i = 0; i < 9; i++) {
    if (squares[i] == 1) {
      oSquares.push(i)
    } else if (squares[i] == 2) {
      xSquares.push(i)
    }
  }

  for (let i = 0; i < 8; i++) {
    let winSetup = winSetups[i]
    let oSquaresRemaining = 3
    let xSquaresRemaining = 3
    let oWin = false
    let xWin = false
    for (let j = 0; j < 3; j++) {
      if (oSquares.includes(winSetup[j])) {
        oSquaresRemaining--
      } else if (xSquares.includes(winSetup[j])) {
        xSquaresRemaining--
      }
    }

    if (oSquaresRemaining == 0) {
      return 1 // 1 means o wins
    } else if (xSquaresRemaining == 0) {
      return 2 // 2 means x wins
    }
  }

  if (xSquares.length + oSquares.length > 8) {
    return 0 // 0 means draw
  } else {
    return 3 // 3 means unfinished box
  }
}

function checkWinBoard() {
  // Get all boxes
  let winSetups = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  let oBoxes = []
  let xBoxes = []

  for (let i = 0; i < 9; i++) {
    if (checkWinBox(i+1) == 1) {
      oBoxes.push(i)
    } 
    else if (checkWinBox(i+1) == 2) {
      xBoxes.push(i)
    }
  }
  
  for (let i = 0; i < 8; i++) {
    let winSetup = winSetups[i]
    let oBoxesRemaining = 3
    let xBoxesRemaining = 3
    for (let j = 0; j < 3; j++) {
      if (oBoxes.includes(winSetup[j])) {
        oBoxesRemaining--
      } else if (xBoxes.includes(winSetup[j])) {
        xBoxesRemaining--
      }
    }

    if (oBoxesRemaining == 0) {
      return 1 // 1 means o wins
    } else if (xBoxesRemaining == 0) {
      return 2 // 2 means x wins
    }
  }

  if (xBoxes.length + oBoxes.length > 8) {
    return 0 // 0 means draw
  } else {
    return 3 // 3 means unfinished board
  }
}

function responseAlgo(grid, lastmovex, lastmovey) {
  // Determine the grid coordinates of the last move
  const xgrid = Math.ceil(lastmovex / 3);
  const ygrid = Math.ceil(lastmovey / 3);

  // Determine the position within the grid
  const lastmovesquarex = lastmovex - (xgrid - 1) * 3;
  const lastmovesquarey = lastmovey - (ygrid - 1) * 3;

  // Calculate the 3x3 grid index
  const gridpos = (lastmovesquarey - 1) * 3 + lastmovesquarex;

  let available_moves = [];

  if (checkWinBox(gridpos) != 3) {
    // If game over in the targeted grid, search the entire grid
    for (let grid_index = 0; grid_index < 9; grid_index++) {
      const grid_x = Math.floor(grid_index / 3) + 1;
      const grid_y = grid_index % 3 + 1;

      // Skip if box is finished
      if (checkWinBox(grid_index+1) != 3) { continue; }
      
      for (let i = 0; i < 9; i++) {
        if (grid[grid_index][i] === 0) {
          const responsey = Math.floor(i / 3) + 1;
          const responsex = i % 3 + 1;
          available_moves.push([(grid_x - 1) * 3 + responsex, (grid_y - 1) * 3 + responsey]);
        }
      }
    }
  } 
  else {
    // Search for an available move in the specified 3x3 grid
    for (let i = 0; i < 9; i++) {
      if (grid[gridpos - 1][i] === 0) {
        const responsey = Math.floor(i / 3) + 1;
        const responsex = i % 3 + 1;
        available_moves.push([(lastmovesquarex - 1) * 3 + responsex, (lastmovesquarey - 1) * 3 + responsey]);
      }
    }
  }

  if (available_moves.length !== 0) {
    const move = available_moves[Math.floor(Math.random() * available_moves.length)]
    
    // Lock player to responding move square's corresponding box counterpart
    const xgrid = Math.ceil(move[0] / 3);
    const ygrid = Math.ceil(move[1] / 3);
  
    const responsex = move[0] - (xgrid - 1) * 3;
    const responsey = move[1] - (ygrid - 1) * 3;
  
    const gridpos = (responsey - 1) * 3 + responsex;
    
    locked = true
    if (checkWinBox(gridpos) != 3) {locked = false}

    if (!locked) {
      selectingSquare=false 
      
      highlightedX = 2
      highlightedY = 2
      squareX = 2
      squareY = 2      
      
      unHighlight()
      highlightBox(highlightedX, highlightedY)
    } else {
      selectingSquare=true
                                    
      highlightedX = (gridpos-1) % 3 + 1;
      highlightedY = Math.floor((gridpos-1)/3) + 1;
      squareX = gridpos % 3 + 1;
      squareY = Math.floor(gridpos / 3) + 1;
      
      let availableOptions = 0
      for (let i = 0; i < 9; i++) {
        if (grid[gridpos - 1][i] === 0) {
          availableOptions++
          squareX = i % 3 + 1;
          squareY = Math.floor(i / 3) + 1;
        }
      }
      if (availableOptions > 1) {
        squareX = 2
        squareY = 2
      }
  
      unHighlight()  
      highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
    }

    // Return move
    return move;
  }
}

let highlightedX
let highlightedY
let squareX
let squareY
let selectingSquare
let canPlace
let locked
let grid
let player

// Input handlers for WASD movement, menu, game, and win screen toggle, box and square selection, and X/O placement
onInput("w", () => {
  if (game == 1) {
    if (selectingSquare && squareY > 1) {
      unHighlight();
      squareY--;
      highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
    } else if (!selectingSquare && highlightedY > 1) {
      unHighlight();
      highlightedY--;
      highlightBox(highlightedX, highlightedY);
    }
  }
});

onInput("a", () => {
  if (game == 1) {
    if (selectingSquare && squareX > 1) {
      unHighlight();
      squareX--;
      highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
    } else if (!selectingSquare && highlightedX > 1) {
      unHighlight();
      highlightedX--;
      highlightBox(highlightedX, highlightedY);
    }
  }
});

onInput("s", () => {
  if (game == 1) {
    if (selectingSquare && squareY < 3) {
      unHighlight();
      squareY++;
      highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
    } else if (!selectingSquare && highlightedY < 3) {
      unHighlight();
      highlightedY++;
      highlightBox(highlightedX, highlightedY);
    }
  }
});

onInput("d", () => {
  if (game == 1) {
    if (selectingSquare && squareX < 3) {
      unHighlight();
      squareX++;
      highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
    } else if (!selectingSquare && highlightedX < 3) {
      unHighlight();
      highlightedX++;
      highlightBox(highlightedX, highlightedY);
    }
  }
});

onInput("i", () => {
  if (game == 1) {
    if (!locked) {
      selectingSquare = !selectingSquare;
      unHighlight();
      squareX = 2;
      squareY = 2;
      if (selectingSquare) {
        highlightSquare(highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY);
      } else {
        highlightBox(highlightedX, highlightedY);
      }
    }
  }
});

onInput("l", () => {
  if (game == 1) {
    if (selectingSquare && canPlace) {
      const x = highlightedX * 3 - 3 + squareX
      const y = highlightedY * 3 - 3 + squareY
      const charstr='abcdefghijklmnaopqrstuvwxyz1ABCDEFGHIJKLMNAOPQRSTUVWXYZ!'
      const empty='adgjmpsvyADGJMPSVY'
      let value = charstr.indexOf(getSprite(x, y))
  
      if (empty.includes(charstr[value])) {
        canPlace = false;
        setSquareValue(x, y, player == 'o' ? 'circle' : 'x')
  
        // Update box of player's move for win, lose, or draw
        let gridpos = (highlightedY - 1) * 3 + highlightedX;
        let status = checkWinBox(gridpos)
        setBoxValue(gridpos, status)

        // Check if game over
        if ((checkWinBoard() == 1 && player == 'o') || (checkWinBoard() == 2 && player == 'x')) {win()}
        else if ((checkWinBoard() == 1 && player == 'x') || (checkWinBoard() == 2 && player == 'o')) {lose()}
        else if (checkWinBoard() == 0) {draw()}
    
        const response = responseAlgo(grid, highlightedX * 3 - 3 + squareX, highlightedY * 3 - 3 + squareY)
        setSquareValue(response[0], response[1], player == 'o' ? 'x' : 'circle')
  
        // Update box of player's move for win, lose, or draw
        const xgrid = Math.ceil(response[0] / 3);
        const ygrid = Math.ceil(response[1] / 3);
        gridpos = (ygrid - 1) * 3 + xgrid;
        status = checkWinBox(gridpos)
        setBoxValue(gridpos, status)

        // Check if game over
        if ((checkWinBoard() == 1 && player == 'o') || (checkWinBoard() == 2 && player == 'x')) {win()}
        else if ((checkWinBoard() == 1 && player == 'x') || (checkWinBoard() == 2 && player == 'o')) {lose()}
        else if (checkWinBoard() == 0) {draw()}
        
        canPlace = true;
      }
    }
  }
});

onInput("j", () => {
  if (game == 0) {
    game = 1; 
    clearText()
  } else if (game == 1) {
    game = 0; 
    screens[1] = originalScreen
    addText("Super Tic Tac Toe!", { 
      x: 1,
      y: 7,
      color: color`3`
    })
    addText("Press J to Start", { 
      x: 2,
      y: 9,
      color: color`1`
    })
  } else if (game == 2) {
    game = 0;
    clearText()
    addText("Super Tic Tac Toe!", { 
      x: 1,
      y: 7,
      color: color`3`
    })
    addText("Press J to Start", { 
      x: 2,
      y: 9,
      color: color`1`
    })
  }
  setMap(screens[game])

  // Reset game control variables
  highlightedX = 2
  highlightedY = 2
  squareX = 2
  squareY = 2
  selectingSquare = false
  canPlace = true
  locked = false
  grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], 
          [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], 
          [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
  player = 'x'
  unHighlight()
  highlightBox(highlightedX, highlightedY)
});