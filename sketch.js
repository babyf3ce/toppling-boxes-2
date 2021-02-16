const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function preload() {}

function setup() {
  var canvas = createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(100, 200, 25, 25);
  ground1 = new Ground(500, 300, 200, 20);
  ground2 = new Ground(700, 250, 100, 10);

  sling = new Slingshot(polygon, { x: 215, y: 250 });
}

function draw() {
  Engine.update(engine);
  polygon.display();
  ground1.display();
  ground2.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  sling.fly();
}
