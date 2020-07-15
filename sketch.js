var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	paperObject = new Paper(200,450,70);
	
	ground1 = new Ground(width/2,670,width,20);

	dustbin1 = new Dustbin(1200,650);

	launcher = new Launcher(paperObject.body,{x:300,y:300});

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  paperObject.display();
  ground1.display();
  dustbin1.display();
  launcher.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-100})
	}
}
function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x: mouseX,y: mouseY});
}
function mouseReleased(){
    launcher.fly();
}

