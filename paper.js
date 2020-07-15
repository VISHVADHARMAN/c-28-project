class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.5
        }
     this.x = x;
     this.y = y;
     this.r = r;
     this.image = loadImage("paper.png");
     this.body = Bodies.circle(this.x,this.y,this.r/3.5,options);
     World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      rectMode(CENTER);
      fill(255,0,255);
      image(this.image,0,0,this.r,this.r);
      
      pop();

    }
}
