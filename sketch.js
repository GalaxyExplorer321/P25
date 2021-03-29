const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject, wall, ceiling, trashcanImage, trashcan;

function preload(){	
	trashcanImage = loadImage("trashcan.png")
}

function setup() {
	createCanvas(895, 700);
	engine = Engine.create();
	world = engine.world;
	wall = new Ground(1000,320,10,1000)
	ceiling = new Ground(350,0,14000,10)
	paperObject = new Paper(100,690,70)
	ground = new Ground(500,height,1000,20)
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(50000);    
  ceiling.display();
  wall.display();
  ground.display();
  paperObject.display(); 
  image(trashcanImage,655,420,300,300);
}

function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-120});
	}
}