class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3 ,
          'friction':5.0,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y,r,options);
      this.r=r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
           push();
      translate(pos.x, pos.y);
     fill("magenta");
     ellipseMode(CENTER);
     ellipse(0,0,this.r,this.r)
      pop();
    }
  };