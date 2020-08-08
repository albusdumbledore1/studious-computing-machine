var ground,particles ,dividers,plinko;




function setup() {
  createCanvas(800,400);
  createSprite(400, 400, 50, 50);

  ground  = new Ground(400,400,800,200);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}