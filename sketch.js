const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];

function setup(){
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  //for(var i = 8; i < particles.length; i++){
    //particles[j].display;
  //}

  ground = new Ground(240, 790, 480, 30);

  particle = new Particle(50, 15, 10);

  division1 = new Division(10, 625, 15, 300);
  division2 = new Division(110, 625, 15, 300);
  division3 = new Division(210, 625, 15, 300);
  division4 = new Division(310, 625, 15, 300);
  division5 = new Division(410, 625, 15, 300);
  division6 = new Division(480, 625, 15, 300);

  plinko1 = new Plinko(70, 60, 20);
  plinko2 = new Plinko(140, 60, 20);
  plinko3 = new Plinko(210, 60, 20);
  plinko4 = new Plinko(280, 60, 20);
  plinko5 = new Plinko(350, 60, 20);
  plinko6 = new Plinko(420, 60, 20);

  plinko7 = new Plinko(40, 160, 20);
  plinko8 = new Plinko(110, 160, 20);
  plinko9 = new Plinko(180, 160, 20);
  plinko10 = new Plinko(250, 160, 20);
  plinko11 = new Plinko(320, 160, 20);
  plinko12 = new Plinko(390, 160, 20);

  plinko13 = new Plinko(70, 260, 20);
  plinko14 = new Plinko(140, 260, 20);
  plinko15 = new Plinko(210, 260, 20);
  plinko16 = new Plinko(280, 260, 20);
  plinko17 = new Plinko(350, 260, 20);
  plinko18 = new Plinko(420, 260, 20);

  plinko19 = new Plinko(40, 360, 20);
  plinko20 = new Plinko(110, 360, 20);
  plinko21 = new Plinko(180, 360, 20);
  plinko22 = new Plinko(250, 360, 20);
  plinko23 = new Plinko(320, 360, 20);
  plinko24 = new Plinko(390, 360, 20);

}

function draw(){
  background("black");

  Engine.update(engine);

  


  ground.display();
  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();

  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();

  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();

  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();

  particle.display();


}

