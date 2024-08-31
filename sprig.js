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
const water_turbulent = "q";
const fish_background = "f";
const seabed = "b";

const thumbs_up = "u";
const thumbs_down = "d";

const motion_ud = "t";
const motion_all = "l";
const motion_ud_selected = "e";
const motion_all_selected = "k";

// Winner
const sparkle_tl= "s";
const sparkle_tr = "z";
const sparkle_bl = "x";
const sparkle_br = "c";
const rock = "o";

const winner_bg = "i";

const fisherman_head = "*";
const fisherman_body = "|";


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
  [ water_turbulent, bitmap`
7777777777777777
7777777777777777
7070707770707077
7707077707070777
7777777777777777
7777777777777777
7777070707777777
7777707070777777
7777777777777777
7777777777777777
7707070777070777
7070707770707077
7777777777777777
7777770707777777
7777707070777777
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
  
  [thumbs_up, bitmap`
...........0....
..........020...
..........020...
.........0220...
.........0220...
000.....0220....
0220.0002200000.
022000222222220.
022000222222000.
0220002222222220
0220002222222220
0220002222220000
0220002222222220
0220.0002222000.
.00.....0022220.
..........0000..`],
  [thumbs_down,  bitmap`
..........0000..
.00.....0022220.
0220.0002222000.
0220002222222220
0220002222220000
0220002222222220
0220002222222220
022000222222000.
022000222222220.
0220.0002200000.
000.....0220....
.........0220...
.........0220...
..........020...
..........020...
...........0....`],

  [motion_ud, bitmap`
.......00.......
......0220......
.....022220.....
....02222220....
....00022000....
......0220......
......0220......
......0220......
......0220......
......0220......
....00022000....
....02222220....
.....022220.....
......0220......
.......00.......
................`],
  [motion_all, bitmap`
.......00.......
......0220......
.....022220.....
....02222220....
....00022000....
..00..0220..00..
.02000022000220.
0222222222222220
0222222222222220
.02000022000020.
..00..0220..00..
....00022000....
....02222220....
.....022220.....
......0220......
.......00.......`],
  [motion_ud_selected, bitmap`
.......00.......
......0440......
.....044440.....
....04444440....
....00044000....
......0440......
......0440......
......0440......
......0440......
......0440......
....00044000....
....04444440....
.....044440.....
......0440......
.......00.......
................`],
  [motion_all_selected, bitmap`
.......00.......
......0440......
.....044440.....
....04444440....
....00044000....
..00..0440..00..
.04000044000440.
0444444444444440
0444444444444440
.04000044000040.
..00..0440..00..
....00044000....
....04444440....
.....044440.....
......0440......
.......00.......`],

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


  [fisherman_head, bitmap`
.....00000......
....0000CC0.....
...00CCCC0C0....
..00CC0000000...
..00C0CCCC0C0...
0000C0000CCCC00.
0000066660000C0.
.00606666606000.
..F6LLL6LLL6F...
..F6L02602L6F...
..F622262226F...
..FF6666666FF...
...F6366366F....
...F6633666F....
....FF666FF.....
......FFF.......`],
  [fisherman_body, bitmap`
...55FFFFFF55...
..556666666655..
.55F66666666F55.
5555F666666F5555
05555F6666F55550
55550LLLLLL05555
0550LLLLLLLL0550
5550LLLLLLLL0555
0550LLLLLLLL0550
5550LLLLLLLL0555
00000LLLLLL00000
CFFC0LLLLLL0CFFC
CFFC0LLLLLL0CFFC
CFCC0LLLLLL0CCFC
CCC.0LLLLLL0.CCC
.....000000.....`]
  
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
........e.l........
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

const fish_start_position = [9,3];


const map_levels = [
  map`
...................
...................
...................
...................
...................
...................
...................
q........n.........
qq.................
boq................
bboq...............
bo.qq..............
bboqqqqq....qqqqbqq
ooboqqqqqqqqboobbqq
bbobbbbqbqbbobbbbbo`,
]
let level = getRandomInt(0,map_levels.length);

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
  addSprite(1,0,speed_sprites[speed]);
}

function showControls(horizontal_play) {
  if (horizontal_play) {
    addSprite(0,0,motion_all);
  }
  else {
    addSprite(0,0,motion_ud);
  }
}

function startText() {

  addText("Level: 1 2 3 4", {
    x: 4,
    y: 3,
    color: color`2`
  })

  addText("Toggle controls (i):", {
    x: 0,
    y: 7,
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
onInput("i", () => {
  if (gameOngoing) {
    return;
  }
  horizontal_play = !horizontal_play;
  let s = getFirst(motion_ud_selected);
  if (s) {
    // UD is selected. Unselect UD. 
    addSprite(s.x, s.y, motion_ud);
    s.remove()

    // Select All
    s = getFirst(motion_all);
    addSprite(s.x, s.y, motion_all_selected);
    s.remove();
  } 
  else 
  {
    // All is selected
    s = getFirst(motion_all_selected);
    // Unselect all
    addSprite(s.x, s.y, motion_all)
    s.remove()

    // Select UD    
    s = getFirst(motion_ud);
    addSprite(s.x, s.y, motion_ud_selected);
    s.remove();
  }
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
    if (getFirst(selector).x < (xSpeed1 + 6 )) {
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
    level = getRandomInt(0,map_levels.length);
    setMap(map_levels[level]);
    setBackground(water);
    fish = fish_types[speed];
    fish_flip = fish_flip_types[speed];
    fish_x = fish_start_position[0];
    fish_y = fish_start_position[1];
    addSprite(fish_x, fish_y, fish);
    showSpeed(speed);
    showControls(horizontal_play);
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




