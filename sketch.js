const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var fruit;
let engine;
let world;
var ground;
var rope;
var fruit_con;
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
rope= new Rope(6,{x:245,y:30});


var fruit_options={density:0.001}
fruit=Bodies.circle(300,300,15,fruit_options);
Matter.Composite.add(rope.body, fruit);
fruit_con = new Link(rope,fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,15,15);
  Engine.update(engine);
  
bridge = new bridge(15, { x:width/2-400 y:height/2});
 joinPoint = new bridge(width-600/2+10, 40, 20 "#8d6e63", true);
   
 Matter.Composite.add(bridge.body, joinPoint);
}
