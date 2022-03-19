function Paddle(){
  this.w = 200;
  this.h = 20;

  this.pos = createVector(width / 2, height - 40);

  this.isMovingRight = false;
  this.isMovingLeft = false;

  this.display = function(){
    rectMode(CENTER)
    rect(this.pos.x, this.pos.y, this.w, this.h)
  }

  this.move = function(step){
    this.pos.x += step
  }

  this.update = function (){
    if (this.isMovingRight){
      this.move(20)
    } else if (this.isMovingLeft){
      this.move(-20)
    }
  }

  this.checkEdges = function(){
    if (this.pos.x < this.w/2){
      this.pos.x = this.w/2
    } else if (this.pos.x > width - (this.w/2)){
      this.pos.x = width - this.w/2
    }
  }
  
}