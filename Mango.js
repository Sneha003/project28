class Mango {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1,
          
      }
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      this.width = 80;
      this.height = 80;
      this.image=loadImage("Plucking mangoes/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // pos.x=mouseX
      //pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // rectMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      
      fill("red");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  