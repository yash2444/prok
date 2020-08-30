const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var ground1,mango1, tree1, stone1, maonj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(700,420,600,530);
	ground1 = new Ground(400,670,800,30);
	stone = new Stone(200,600,55,55);
	mango1 = new Fruit(700,300,30,30);
	boy1 = new Player(stone.body,{x:200, y:550});
	Engine.run(engine);
  
}
function draw() {
	background(255);
  rectMode(CENTER);
  tree1.display();

 ground1.display();
mango1.display();
stone.display();
boy1.display();
 
}   
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy1.fly();
}