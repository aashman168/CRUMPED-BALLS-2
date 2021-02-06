
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinimage;

function preload()
{
	dustbinimage=loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(650, 650, 1300, 20)
	box1=new Box(1100, 630, 160, 20)
	box2=new Box(1020, 550, 20, 100)
	box3=new Box(1180, 550, 20, 100)

	ball1=new Ball(480, 645, 50)
	Engine.run(engine);
  
}


function draw() {
  background('white');
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  image(dustbinimage, 1000, 450, 200, 200)
  ball1.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:400, y:-400})

	}
}

