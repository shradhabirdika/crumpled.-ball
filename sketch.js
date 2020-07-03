const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1200, 750);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1000,650);
	paperObject=new paper(200,650,40);
	groundObject=new ground(width/2,670,width,20);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





