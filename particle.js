class particle {
    constructor(x,y){
    
      var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2,
    }
    this.body= Bodies.circle(x,y,this.r=10,options);
    this.color=color(random(0, 255), random(0.255), random(0,255));

    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("black");
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}