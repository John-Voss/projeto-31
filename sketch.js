const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine;
var world;

var ground;
var plinkos1, plinkos2, plinkos3, plinkos4;
var division;
var particles = [];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 790);

  for (let j = 1; j <= 800; j=j+100) {
    division = new Division(j,640);
  }
  for (let i = 50; i <= 790; i=i+45) {
    plinkos1 = new Plinko(i, 150);
  }
  for (let p = 25; p <= 750; p=p+45) {
    plinkos2 = new Plinko2(p, 200);
  }
  for (let i = 50; i <= 790; i=i+45) {
    plinkos3 = new Plinko(i, 250);
  }
  for (let p = 25; p <= 750; p=p+45) {
    plinkos4 = new Plinko2(p, 300);
  }
}
function draw() {
  background(4,25,84);
  Engine.update(engine);

  ground.display();

  if(frameCount%50 === 0) {
    particles.push(new Particle(random(5, 750), -10, 10));
  }
  for (let o = 0; o < particles.length; o++) {
    particles[o].display();
  }

  division.display();

  plinkos1.display();
  plinkos2.display();
  plinkos3.display();
  plinkos4.display();

}
