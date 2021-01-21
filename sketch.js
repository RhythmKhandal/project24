
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;
var dustbin1,dustbin2,dustbin3;
var ground;
var image1;

function preload()
{
	image1=loadImage("dustbingreen.png")
	//image2=loadImage("paperIMG.png")
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(100,100)
	dustbin1 = new Dustbin(625,657,140,17)
	dustbin2 = new Dustbin(555,590,17,155)
	dustbin3 = new Dustbin(685,590,17,170)
	ground = new Ground(400,670,800,15)
	
	//Engine.run(engine);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Render.run(render);

}


function draw() {
  
  background(225);
  
	Engine.update(engine)

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	
	image(image1,620,580,167,180) 
   ground.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-125})
		}


}


