
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (600,windowHeight-10, 2000, 10);
  superhero= new Superhero(400,3,100,100);
  attach=new Throw(superhero.body,{x:100,y:465});
  block1 = new Block(600,500,50,50);  
  block2 = new Block(650,500,50,50);
  block3 = new Block(700,500,50,50);
  block4 = new Block(550,500,50,50);
  block5 = new Block(500,500,50,50);
  block6 = new Block(525,460,50,50);
  block7 = new Block(575,460,50,50);
  block8 = new Block(625,460,50,50);
  block9 = new Block(675,460,50,50);
  block10 = new Block(550,425,50,50);
  block11 = new Block(600,425,50,50);
  block12 = new Block(650,425,50,50);
  block13 = new Block(575,400,50,50);
  block14 = new Block(625,400,50,50);
  block15 = new Block(600,320,50,50);
  monster = new Monster(600,260,100,100);
  
  //console.log(block15.x)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

   attach.display();
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  monster.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


