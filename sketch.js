let paddle;
let ball;
let bricks = [];
let playingGame = false
let youWin = false
let winText = "YAYY, KAMU MENANG!!!";

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
  ball = new Ball();

  for (let i = 0; i < 20; i++) {
    bricks.push(new Bricks())
  }
}

function draw() {
  background(220);
  paddle.display()
  if (playingGame){
    paddle.update();
    paddle.checkEdges();
    ball.update();
    ball.checkEdges();
  } else {
    text("TEKAN 'ENTER' ATAU 'RETURN'", width/2 - 90, height-200)
  }

  ball.display();
  ball.hitPaddle();

  let number
  number = map(2, 1, 10, 1, 100)

  for (let j = 0; j < bricks.length; j++) {
    bricks[j].display();
    if (ball.hits(bricks[j])) {
      if (bricks[j].r > 40) {
        bricks[j].r = bricks[j].r / 2;
      } else {
        bricks.splice(j, 1);
      }
      ball.direction.y *= -1
    }
  }

  if (ball.pos.y > height){
    playingGame = false
    ball.pos = createVector(width/2, height/2);
  }

  if (bricks.length === 0){
    youWin = true
    playingGame = false
  }

  if (youWin){
    text(winText, width/2, height/2)
  } 
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    paddle.isMovingLeft = true
  } else if (keyCode === RIGHT_ARROW) {
    paddle.isMovingRight = true
  } else if (keyCode === ENTER){
    playingGame =true
    youWin = false
    if (bricks.length === 0){
      for (let i = 0; i < 20; i++){
        bricks.push(new Bricks());
      }
    }
  }
}

function keyReleased() {
  paddle.isMovingLeft = false;
  paddle.isMovingRight = false;
}

