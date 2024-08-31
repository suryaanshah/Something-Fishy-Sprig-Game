/*
@title: Something Fishy
@author: Suryaansh Chawla
@tags: [fishing, fish]
@addedOn: 2024-08-25
*/

const one = "1";
const two = "2";
const three = "3";

const selector = "a";

const net = "n";
const wall = "w";
const fish1 = "r";
const fish1_flip = "4";
const fish2 = "y";
const fish2_flip = "5";
const fish3 = "h";
const fish3_flip = "6";
const water = "w";
const fish_background = "f";
const seabed = "b";

// Winner
const sparkle_tl= "s";
const sparkle_tr = "z";
const sparkle_bl = "x";
const sparkle_br = "c";
const rock = "o";

const winner_bg = "i";


setLegend(
  [ one, bitmap`
................
................
........00000...
........02220...
........02220...
........00220...
.........0220...
.........0220...
.........0220...
.........0220...
.........0220...
.........0220...
.........0220...
.........0000...
................
................` ],
  [ two, bitmap`
................
................
......0000000...
......0222220...
......0222220...
......0222220...
......0000220...
......0222220...
......0222220...
......0222220...
......0220000...
......0222220...
......0222220...
......0000000...
................
................` ],
  [ three, bitmap`
................
................
......0000000...
......0222220...
......0222220...
......0222220...
......0000220...
......0222220...
......0222220...
......0222220...
......0000220...
......0222220...
......0222220...
......0000000...
................
................` ],
  [ selector, bitmap`
........000.....
.......00200....
......0022200...
.....002222200..
....00222222200.
...0022222222200
...0222222222220
...0000022200000
.......02220....
.......02220....
.......02220....
.......02220....
.......02220....
.......02220....
.......02220....
.......00000....`],

  
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
  [ seabed, bitmap`
D...............
DD..............
DD..............
DD..............
DDD............D
DDDD...........D
DDDDD.........DD
DDDDD........DDD
DDDDDD......DDDD
DDDDDDD....DDDDD
DDDDDDD....DDDDD
DDDDDDDD...DDDDD
DDDDDDDDD..DDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
  [rock, bitmap`
................
.222F22.........
.FFCFF2F66......
FFFCCCFF6F6.....
LCCFCCFFFFF66...
LLCCCCFCCFF66...
LLLLLCCCFFFFFF..
LLLL1CCCCCCFFF..
L00L11CCCCCCFF..
000L01C0LCLCLFF.
00L111100CLLLLF.
00L1111CC00CLL..
00LL11111000LLL.
.00LL1111111LCC.
.000011LLL11LLCC
..000000LLL11LCC`],

  [fish1, bitmap`
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
  [fish2, bitmap`
.........5...5..
........5.5.5.5.
.......5...5...5
.........005....
.......00LL000..
.0.0...0LLLLL00.
01010..0LLL22L0.
01110..0LLL20L00
.010..0LLLLLLLL0
.010.00LLLLLLLL0
.8010LLLLL222220
..80L2220LL2220.
...8000.0000008.
....8880..088...
................
................`],
  [fish3, bitmap`
................
................
................
...0000.........
..0088800000....
....000666070...
....0886607770..
0..086666077070.
900666666077070.
090666666607770.
9066666666600000
90666666660CCCC0
0906088060C0000.
90.00806660CCC0.
00..0066666000..
......00000.....`],

  [fish1_flip, bitmap`
................
................
................
....33333...338.
..33333333.58388
..3223333338838.
.3302333383333..
333333883338838.
DDD3888833.58388
...333333...338.
................
................
................
................
................
................`], 
  [fish2_flip, bitmap`
..5...5.........
.5.5.5.5........
5...5...5.......
....500.........
..000LL00.......
.00LLLLL0...0.0.
.0L22LLL0..01010
00L02LLL0..01110
0LLLLLLLL0..010.
0LLLLLLLL00.010.
022222LLLLL0108.
.0222LL0222L08..
.8000000.0008...
...880..0888....
................
................`],
  [fish3_flip, bitmap`
................
................
................
.........0000...
....0000088800..
...070666000....
..0777066880....
.070770666680..0
.070770666666009
.077706666666090
0000066666666609
0CCCC06666666609
.0000C0608806090
.0CCC06660800.09
..0006666600..00
.....00000......`],

  [fish_background, bitmap`
................
................
................
000.....000.....
0..0...00..0....
.0..0.0.....0...
.0...00......00.
..0.0........0.0
...0.........0.0
..0.0........0.0
.0...00......00.
.0..0.0.....0...
0..0...00..0....
000.....000.....
................
................`],

  [ winner_bg, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
  [ sparkle_tl, bitmap`
................
................
.6666...........
.666666.........
.6666666........
.6666666........
...666666.......
....666666......
......6666......
........666.....
.........666....
.........6666...
...........66...
.............6..
................
................`],
  [ sparkle_bl, bitmap`
................
................
.............6..
...........66...
..........666...
.........666....
.......66666....
......6666......
....66666.......
...666666.......
...66666........
..666666........
..66666.........
..6666..........
..6666..........
................`],
  [ sparkle_tr, bitmap`
................
..........6666..
..........6666..
.........66666..
........666666..
........66666...
.......666666...
.......66666....
......6666......
....66666.......
....666.........
...666..........
...66...........
..6.............
................
................`],
  [ sparkle_br, bitmap`
................
................
..6.............
...66...........
...6666.........
....666.........
.....666........
......6666......
......666666....
.......666666...
........6666666.
........6666666.
.........666666.
...........6666.
................
................`],
)

// Setup
setSolids([fish1, fish2, fish3, fish1_flip, fish2_flip, fish3_flip, rock, seabed ]);

const setup_map = map`
...................
..........r.y.h....
...................
...................
..........a........
...................
...................
...................
...................
bo.................
bbo................
bo.................
bbo.............b..
oobo........boobb..
bbobbbb.b.bbobbbbbo`;
setMap(setup_map);
setBackground(water);

const xSpeed1 = getFirst(selector).x;

let score = 0;

let horizontal_play = false;

let moveInterval = undefined;
let gameOngoing = false;
let resetSpeed = false;
const netAcceleration = 0.4;
const netTerminalSpeed = 2.0;

let level = 0;
const map_levels = [
  map`
...................
...................
...................
...................
...................
...................
...................
.........n.........
...................
bo.................
bbo................
bo.................
bbo.............b..
oobo........boobb..
bbobbbb.b.bbobbbbbo`,
]

let speed = 0;
fish_speeds = [
  500,
  200,
  25
];

fish_types = [
  fish1,
  fish2,
  fish3
];

let fish = fish_types[speed];

fish_flip_types = [
  fish1_flip,
  fish2_flip,
  fish3_flip
];

let fish_flip = fish_flip_types[speed];

speed_sprites = [
  one,
  two,
  three
];

// The fish should move faster than the net, so gravity Interval should be bigger.
fishDelayTime = 1000;
gravityIntervalTime = 700;

const winMap =  map`
..................
..................
....s.......z.....
...s.........z....
..s...........z...
...............z..
..................
..................
..x............c..
...x..........c...
....x........c....
..................
..................
..................
..................`;

function computeSpeed(xSpeed1, xSelectedSpeed) {
  return Math.floor((xSelectedSpeed - xSpeed1) / 2);
}

function showSpeed(speed) {
  addSprite(0,0,speed_sprites[speed]);
}


function startText() {

  addText("Level: 1 2 3", {
    x: 4,
    y: 3,
    color: color`2`
  })
  
  addText("Press s to start!", {
    x: 2,
    y: 12,
    color: color`2`
  })
}

function scoreText(score = 0) {
  addText("Score:", {
  x: 13,
  y: 1,
  color: color`2`
  });

  addText(score.toString().padStart(2, '0'), {
    x: 15,
    y: 3,
    color: color`2`
  });
}

function winnerText() {
  addText("Winner!!!", {
    x: 6,
    y: 7,
    color: color`3`
  });
}

function resetText() {
  addText("Press j to reset", {
    x: 2,
    y: 14,
    color: color`5`
  });
}

startText();

function gameLoop() {
  moveFish();
  gravityNet();
}

// l for horizontal play
onInput("l", () => {
  if (gameOngoing) {
    return;
  }
  horizontal_play = true;
});


// a for levels and moving with horizontal play
onInput("a", () => {
  if (gameOngoing) {
    if (!horizontal_play) {
      return;
    }
    
    getFirst(net).x -= 1; 
    computeScore();
  }
  else {
    if (getFirst(selector).x > xSpeed1) {
      getFirst(selector).x -= 2; 
    }
  }
});

// d for levels
onInput("d", () => {
  if (gameOngoing) {
    if (!horizontal_play) {
      return;
    }
    
    getFirst(net).x += 1; 
    computeScore();
  }
  else {
    if (getFirst(selector).x < (xSpeed1 + 4 )) {
      getFirst(selector).x += 2; 
    }
  }
});

// s for start
onInput("s", () => {
  // This check is necessary to prevent fish erratic behavior.
  if ((!gameOngoing) & (score == 0)) {
    // The fish should move faster than the net, so gravity Interval should be bigger.
    speed = computeSpeed(xSpeed1, getFirst(selector).x);
    fishIntervalTime = fish_speeds[speed];
    setMap(map_levels[level]);
    setBackground(water);
    fish = fish_types[speed];
    fish_flip = fish_flip_types[speed];
    addSprite(9,3,fish);
    showSpeed(speed);
    gameOngoing = true;
    gameLoop();
    clearText();
    scoreText();
  }
  
});

// w for moving up
onInput("w", () => {
  if (!gameOngoing) {
    return;
  }
  getFirst(net).y -= 1; 
  resetSpeed = true;
  computeScore();
});


// j for reset
onInput("j", () => {
  gameOngoing = false;
  setMap(setup_map);
  setBackground(water);
  horizontal_play = false;
  score = 0;
  clearText();
  startText();
});

function win() {
  clearText();
  gameOngoing = false;
  setMap(winMap);
  setBackground(winner_bg);
  
  winnerText();
  resetText();
}

function computeScore() {
  if (!gameOngoing) {
    return;
  }
  let f = getFirst(fish) || getFirst(fish_flip);
  if ((getFirst(net).y == f.y) && (getFirst(net).x == f.x)) {
    score += 10;
  }
  else {
    score -= 1;
  }
  score = Math.max(score, 0);
  scoreText(score);

  if (score >= 100) {
    win();
  }
  
}

function updateFish() {
  let f = getFirst(fish);
  if (f) {
    addSprite(f.x, f.y, fish_flip)
    f.remove()
  } 
  else 
  {
    f = getFirst(fish_flip);
    addSprite(f.x, f.y, fish)
    f.remove()
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomSign() {
    return Math.random() < 0.5 ? -1 : +1;
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function moveFish() {
  if (!gameOngoing) {
    clearInterval(moveInterval);
    return;
  }

  if (horizontal_play) {
    moveHorizontally = getRandomBoolean();
    horizontalDirection = getRandomSign();
  }
  
  let numMoves = getRandomInt(1, 5);


  let f = getFirst(fish) || getFirst(fish_flip);
  let startY = f.y;
  let startX = f.x;
  let directionMoves = getRandomSign();
  if (startY == 0) {
    directionMoves = 1; 
  }
  else if (startY == (height()-1)) {
    directionMoves = -1; 
  }

  // Limit horizontal motion
  if (horizontal_play) {
    if (startX == Math.floor(width()/2 - 5)) {
      horizontalDirection = 1; 
    } 
    else if (startX == Math.floor(width()/2 + 2)) {
      horizontalDirection = -1; 
    }
  }
  
  moveCount = 0;
  moveInterval = setInterval(() => {
    if (gameOngoing) {
      f.y += directionMoves; // move the fish
      moveCount++; // increment number of times the fish has moved

      if (horizontal_play) { 
        if (moveHorizontally && moveCount === 1) {
          f.x += horizontalDirection; // Move the fish horizontally once
          updateFish();
        }
      }
    }
    else {
      clearInterval(moveInterval);
    }

    if (moveCount >= numMoves) {
      clearInterval(moveInterval);
      setTimeout(moveFish, fishDelayTime);
    }
  }, fishIntervalTime);
}

function gravityNet(currentSpeed = 0, accumulatedY = 0) {
  computeScore();
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




