const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1, log2, log3, log4;
var pig1 , pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(658,325,70,70);
    box2 = new Box(890,325,70,70);
    box3 = new Box(658,225,70,70);
    box4 = new Box(890,225,70,70);
    box5 = new Box(780,115,70,70);

    log1 = new Log(780,280,350,PI/2);
    log2 = new Log(780,180,350,PI/2);
    log3 = new Log(750,165,170,PI/7);
    log4 = new Log(850,165,170,-PI/7);

    pig1 = new Pig(750,325);
    pig2 = new Pig(750,225);

    bird = new Bird(100,100);
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();
    ground.display();
}