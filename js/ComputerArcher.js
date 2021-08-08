class ComputerArcher{
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/base1.png");
  
      World.add(world, this.body);
    }
  
    display() 
    {

      if (move === "UP" && computerArcher.body.angle < 1.77)
      {
          angleValue = 0.1;
      }else{
        angleValue = -0.1;
  
      }
  
      if (move === "DOWN" && computerArcher.body.angle < 1.47)
      {
          angleValue = -0.1;
      }else{
        angleValue = 0.1;
  
      }

      Matter.body.setAngle(this.body,-PI/2);
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    shoot(archerAngle) 
    {
     var velocity = p5.vector.fromangle(archerAngle);
     velocity.mult(20);
     Matter.body.setStatic(this.body,false);
     Matter.body.setVelocity(this.body,{x: velocity.x, y: velocity.y});

     if(keyCode === 32)
     {
    arrow.shoot(playerArcher.body.angle);
     }
    
    }
     
}