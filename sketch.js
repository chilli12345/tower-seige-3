const Body = Matter.Bodies;
const Constraint= Matter.Constraint;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
var plinko;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
   world=engine.world
   
   ground = new Ground(400,695,800,10);
   for(var j = -35; j <= width-10;j=j+50)
   {
    plinkos.push(new Plinko(j,75)); 
   }
   for (var j = 15; j <= width-10; j=j+50){
     plinkos.push(new Plinko(j,175));
   }
   for(var j = 40; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 40; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
 for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 40; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
   Engine.run(engine);
}

function draw() {
  background(0);  
   ground.display();
   if(frameCount%30===0){

    particles.push(new Particle(random(800/2-50, 800/2+50),10,10));
  }
   for(var k = 0; k < plinkos.length; k++)
  {
     plinkos[k].display();
  }
  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  
  for(var p = 0; p < particles.length; p++){
    particles[p].display();
  }
 
}

