var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, PlayerAnimation;
var school;
var newPlayer;
var carAnimation1,carAnimation2,playerAnimation,logAnimation,carImage,logImage,playerImage;
var carGroup1,logGroup;
var city, cityAnimation;
var gameState=PLAY;
var gameState,gameState=WIN;

function preload()


{
 carAnimation1=loadAnimation("images/car1.png");
 carAnimation2=loadAnimation("images/car2.png");
 playerAnimation=loadAnimation("images/Player-03.png");
logAnimation=loadAnimation("images/log2.png");
cityAnimation=loadAnimation("images/city1.png,city2.png");
}

function setup() {
  createCanvas(700,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
 
  city=createSprite(width/2,-1500);
  city.addAnimation("city",cityAnimation);
  
//grass Player can rest at
for (var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0){
      var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor="green";
  }
  //for makingg rows of cars.
  for(var i = 0; i<40; i++){
    car = new Car(2);
    carGroup1.add(cars.spt);
  }
  //making logs reapper
 for(var i = 0; i<40; i++){
   log=new Log(-2);
   logGroup1.add(log.spt);
 }
   
if(carGroup1.isTouching(player.spt)){
  player.spt.x=width/2;
  player.spt.y=height-75;

}

if(logGroup1.isTouching(player.spt)){
  player.spt.x=player.spt.x-3;
}
else if
((player.spt.y>height-1550 && player.spt.y<height-1300)||
(player.spt.y<height-500 && player.spt.y>height-850)||
(player.spt.y>height)||
(player.spt.x<o)||
(player.spt.x>width)){
  player.spt.x=player.spt.x-3;
}
}

 


function draw() {
  background("skyblue");

  for(i=1;i<logGroup1.length;i++){
 if(logGroup1[i].x<0)
   logGroup1[i].x=width;
 }

 for(i=1;i<carGroup1.length;i++){
  if(carGroup1[i].x<0)
    carGroup1[i].x=width;
  }
 function translate()
 { translate= (0,-Player.spt.y+height-150);
}

function keyPressed(){

  if(keyCode==UP_ARROW){
    Player.move(0,-2);
  
  }else if(keyCode==DOWN_ARROW){
    Player.move(0,2);
  }else if(keyCode==LEFT_ARROW){
    Player.move(-2,0);
  }else if(keyCode==RIGHT_ARROW){
    Player.move(2,0);
  }
}
Player=newPlayer(width/2,height-25);

if(city.isTouching(player.spt)){
  gameState=WIN;
  
  }
  
  if(gameState===WIN){
  stroke("green");
  fill("green");
  textSize(40);
  text("Congratulations!You made it!",width/2-250,-1700);
  carGroup1.destroyEach();
  logGroup.destroyEach();
  
  }
  
  drawSprites();
}
