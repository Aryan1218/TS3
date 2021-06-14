const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var score=0 


function setup(){
    var canvas = createCanvas(1200,400);
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Box(270,235,30,40)
    stand = new Stand(375,300,250,10)
    box2 = new Box(300,235,30,40)
    box3 = new Box(330,235,30,40)
    box4= new Box(360,235,30,40)
    polygon= new Polygon(50,200,50,50)
    slingshot1 = new Slingshot(polygon.body,{x:100,y:200});

}


function draw(){

background("black")
ground.display()
box1.display()
stand.display()
box2.display()
box3.display()

box4.display()
polygon.display()
slingshot1.display()
Engine.update(engine);
Text("SCORE:"+score,750,40);
}
function mouseDragged(){ 
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY}); }
     function mouseReleased(){ slingshot1.fly(); }
     function keyPressed(){
        if((keyCode === 32) && gameState ==="launched"){
            if(polygon.length>=0 ){   
                Matter.Body.setPosition(polygon[polygon.length-1].body, {x: 200 , y: 50});         
                slingshot.attach(polygon[polygon.length-1].body);
                
                gameState = "onSling";
            }
        }
    } 