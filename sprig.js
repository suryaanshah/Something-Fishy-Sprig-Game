/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const net = "n";
const wall = "w";
const fish = "r";
const fish2 = "b";
const water = "w";

// For later
const fishTopLeft = "l";
const fishTopRight = "r";
const fishBottomLeft = "u";
const fishBottomRight = "d";



setLegend(
  [ net, bitmap`
0.0.0.0.0.0.0.0.
.0.0.0.0.0.0.0.0
0.............0.
.0.............0
0.............0.
.0.............0
0.............0.
.0.............0
0.............0.
.0.............0
0.............0.
.0.............0
0.............0.
.0.............0
0.0.0.0.0.0.0.0.
.0.0.0.0.0.0.0.0`],
  [ wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [ fish2, bitmap`
................
................
........77......
..7...77..7.....
.5.7.7.....57...
..5.5..H...5.7..
...5...H...5.07.
...5...H...5..7.
..5.5..H...5.7..
.5.7.7.....57...
..7...77..7.....
........77......
................
................
................
................`],
  [ fish, bitmap`
................
................
................
.833...33333....
88385.33333333..
.8388333333223..
..3333833332033.
.838833388333333
88385.3388883DDD
.833...333333...
................
................
................
................
................
................`],
  [ water, bitmap`
7777777777777777
7777777777777777
7575757775757577
7757577757575777
7777777777777777
7777777777777777
7777575757777777
7777757575777777
7777777777777777
7777777777777777
7757575777575777
7575757775757577
7777777777777777
7777775757777777
7777757575777777
7777777777777777`],  
)

// The fish should move faster than the net, so gravity Interval should be bigger.
fishIntervalTime = 300;
fishDelayTime = 1000;
gravityIntervalTime = 700;

let moveInterval = undefined;
let gameOngoing = false;
let resetSpeed = false;
const netAcceleration = 0.4;
const netTerminalSpeed = 2.0;

let level = 0
const levels = [
  map`
...................
...................
...................
.........r.........
...................
...................
...................
.........n.........
...................
...................
...................
...................
...................
...................
...................`
]

setMap(levels[level]);
setBackground(water);

function gameLoop() {
  moveFish();
  gravityNet();
}

// s for start
onInput("s", () => {
  gameOngoing = true;
  gameLoop();
});

// w for moving up
onInput("w", () => {
  if (!gameOngoing) {
    return;
  }
  getFirst(net).y -= 1; 
  resetSpeed = true;
});

// j for reset
onInput("j", () => {
  gameOngoing = false;
  setMap(levels[level]);
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomSign() {
    return Math.random() < 0.5 ? -1 : +1;
}

function moveFish() {
  let numMoves = getRandomInt(1, 5);
  
  startY = getFirst(fish).y;
  let directionMoves = getRandomSign();
  if (startY == 0) {
    directionMoves = 1; }
  else if (startY == (height()-1)) {
    directionMoves = -1; }
  
  moveCount = 0;
  moveInterval = setInterval(() => {
    if (gameOngoing) {
      getFirst(fish).y += directionMoves; // move the fish
      moveCount++; // increment number of times the fish has moved
    } else {
      clearInterval(moveInterval);
    }

    if (moveCount >= numMoves) {
      clearInterval(moveInterval);
      setTimeout(moveFish, fishDelayTime);
    }
  }, fishIntervalTime);
}

function gravityNet(currentSpeed = 0, accumulatedY = 0) {
  const maxY = height() - 1;
  
  if (!gameOngoing) {
    return;
  }

  if (getFirst(net).y >= maxY) {
    resetSpeed = true;
  }

  // Assume a = 1 // gravitational acceleration
  if (resetSpeed) {
    currentSpeed = 0;
    resetSpeed = false;
  } 
  else {
    currentSpeed += netAcceleration;
  }

  currentSpeed = Math.min(currentSpeed, netTerminalSpeed); // Speed cannot exceed terminal speed. 
  accumulatedY += currentSpeed;

  // remaning distance to bottom
  let remainingDistanceToBottom = maxY - getFirst(net).y;

  const intYMovement = Math.floor(accumulatedY);
  accumulatedY -= intYMovement; // To be used for future movement

  if (intYMovement > 0) {
    if (intYMovement > remainingDistanceToBottom) {
      getFirst(net).y += remainingDistanceToBottom;
    }
    else {
      getFirst(net).y += intYMovement; // positive y is downwards
    }
  }
  
  setTimeout(() => 
    gravityNet(currentSpeed, accumulatedY), gravityIntervalTime);
}




