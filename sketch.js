var score = 0
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
	bin1 = new Bin(1300,665,170,20)
	bin2 = new Bin(1205,615,20,120)
	bin3 = new Bin(1395,615,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(ball.y = 665){
	  score = score + 1
  }
  if(ball.x = 1300){
	  score = score + 1
  }
  if(score  = score + 1){
	  Text("Nice Job");
  }
  keyPressed();
  drawSprites();
 
}



function keyPressed(){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80, y:-85})
	}

}

