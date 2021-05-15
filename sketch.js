const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var rock;

var BGImg


function preload(){
    BGImg = loadImage("Background.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(width/2,height-80,width,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,100,20);
  
    iron = new Iron(width/3,100)
    rock = new Rock(width/2,100)

}

function draw(){
    background(BGImg);
    Engine.update(engine);
    rubber.display();
    hammer.display();
    iron.display();
    rock.display();
 
}