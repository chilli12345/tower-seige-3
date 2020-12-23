class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            density:3,
            friction:0.8,
        }
      this.body=Body.circle(x,y,10,options);
      World.add(world, this.body);
    }

    display(){
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,10);
        ellipseMode(RADIUS);
        
    }
}