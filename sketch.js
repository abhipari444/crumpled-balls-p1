
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	paper = new Paper(100,300,10);
	dustbin = new Dustbin(720,390,100,10);
	ground = Bodies.rectangle(width / 2, 400, width, 10,
{
			isStatic: true
})
		
    World.add(world,ground);
	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  dustbin.display();
  paper.display();
  
 
}



