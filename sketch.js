
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,  ground, paper1, paper, dustbin, dustbin1;


function preload() {
	
	
	bg= loadImage("bg.jpg");



}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;



	paper = new Paper (100, 200,10,10);

	ground = new Ground(400,680,800,20);
	dustbin = new Dustbin(700, 565, 200, 300)







	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(bg);


	ground.display();
	dustbin.display();
	paper.display();
	
	


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, { x: 4.5, y: -4.5 });
	}
}