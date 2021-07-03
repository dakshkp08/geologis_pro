
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
plane=new Plane(400,700,1200,20)
hammer=new Hammer(10,100)
stone=new Stone(500,100)
rubber=new Rubber(300,400,50)	
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  plane.display()
  rubber.display()
stone.display()
hammer.display()  
  drawSprites();
 
}


