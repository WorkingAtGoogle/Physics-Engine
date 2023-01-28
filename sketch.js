
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  box = Bodies.rectangle(300, 200, 100, 20, ground_options)
  World.add(world,box);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(150, 20, 20,ball_options)
  World.add(world,ball1);

  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(box.position.x,box.position.y,100, 20)
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball1.position.x,ball.position.y,20)
}

