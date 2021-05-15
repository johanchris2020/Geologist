const Engine = Matter.Engine;   
const World= Matter.World;   
const Bodies = Matter.Bodies;   
//create variables
var engine, world;   
var hammer, plane, stone, iron;   
   
   
function setup(){   
    var canvas = createCanvas( 1534, 718);   
    engine = Engine.create();   
    world = engine.world;   
   
    // new object
    plane = new Plane (600,height,1200,20)   
    hammer = new Hammer(10,100);   
    iron = new Iron(50,140);   
    stone = new Stone(30,200);   
}   
  
function draw(){   
   background("lightBlue");   
   Engine.update(engine);   
  
   // display items
   plane.display();   
   hammer.display();   
   stone.display();   
   iron.display();   
}