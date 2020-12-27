class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution: 0.8,
          friction: 1.0,
          density: 1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=this.radius
      World.add(world, this.body);
   this.image=loadImage("basketball.png")
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("red");
      image(this.image,0,0, this.radius,this.radius);
    pop();
    }
  }