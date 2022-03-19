function Ball() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 30
  this.direction = createVector(random(-1, 1), 1)
  this.v = createVector(1, 1).mult(8)

  this.display = function () {
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  this.update = function () {
    this.pos.x += this.direction.x * this.v.x
    this.pos.y += this.direction.y * this.v.y
  }

  this.checkEdges = function () {
    if (this.pos.x > width - this.r / 2 || this.pos.x < 0 + this.r / 2) {
      this.direction.x *= -1
    } else if (this.pos.y < this.r / 2) {
      this.direction.y *= -1
    }
  }

  this.hitPaddle = function () {
    if (this.pos.y > paddle.pos.y - this.r / 2 - paddle.h / 2 && (this.pos.x < paddle.pos.x + paddle.w / 2 && this.pos.x > paddle.pos.x - paddle.w / 2)) {
      this.direction.y *= -1

      let temp = constrain(this.pos.x, paddle.pos.x - paddle.h/2, paddle.pos.x + paddle.h/2)
      this.direction.x = map (temp, paddle.pos.x - paddle.h/2, paddle.pos.x + paddle.h/2, -1, 1)

    }
  }

  this.hits = function(bricks){
    var distance = dist(this.pos.x, this.pos.y, bricks.pos.x, bricks.pos.y)
    if (distance < this.r + bricks.r){
      return true
    } else {
      return false
    }
  }

}