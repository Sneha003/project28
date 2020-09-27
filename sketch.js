
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = new Ground(600,670,1200,20)
 
  tree = new Tree(600,670,500,700)
  boy = new Boy(380,650,240,500)
  mango1 = new Mango(450,200,80,80)
  mango2 = new Mango(500,210,80,80)
  mango3 = new Mango(550,300,80,80)
  mango4 = new Mango(600,200,80,80)
  mango5 = new Mango(650,250,80,80)
  
  stone = new Stone(200,650,80,80)
  
  slingshot = new Slingshot(stone.body,{x:120,y:465});


 

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("yellow");

  
 
  ground.display();
 
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  
  stone.display();
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
 

  drawSprites();
  
  
}

function keypressed(){
  if(keyCode === 32){
   // Matter.Body.setPosition(stone.body,{x:235,y:420})
    slingshot.attach(stone.body);
  }
}


function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
   stoneBodyPosition=lstone.body.position
 
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false);
   }
 }

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }

  function mouseReleased(){
      slingshot.fly();
  }



