let trex1,trex2,trex3,ground,inv,ine,gameState,score;
function setup() {
  createCanvas(windowWidth, windowHeight);
 trex1=new Trex(70,height-150,80,80,"trex1.png");
 trex2=new Trex(width+100,height-150,80,80,"trex3.png");
  trex3=new Trex(width+100,height-150,80,80,"trex4.png");
  trex=new Trex(width+100,height-150,80,80,"trex_collided.png");
  ground=new Ground(width/2,height-110,width*2,10);
  inv=new Invisible(70,height-78,width*2,62);
  obstacle=new Obstacle(width+10,height-130,25,50);
  skin=new Covering(obstacle.x,obstacle.y,obstacle.width,obstacle.height);
  skin2=new Covering(0,0,56,20);
  ball=new Covering(0,10,20,20);
  game=new Trex(width/2,height/2-100,400,20,"gameOver.png");
  restart=new Trex(width/2,height/2-30,70,50,"restart.png");
  gameState="start";
  score=0;
}

function draw() {
  background(260);
  trex1.display();
  trex2.display();
  trex3.display();
  ground.display();
 trex.display();
  inv.display();
  ball.move();
  obstacle.display();
  
  //skin.display();
  //skin2.display();
  skin.x=obstacle.x;
  skin.width=obstacle.width;
  skin.y=obstacle.y;
  skin.height=obstacle.height;
  if(gameState==="start"){
    trex.x=width+100;
   for(var i=0;i<10;i++){
    if(ball.x%10===i){
      trex1.x=70;
      trex2.x=width+100;
      trex3.x=width+100;
    }
    if(ball.x%20===i){
      trex2.x=70;
      trex1.x=width+100;
      trex3.x=width+100;
    } 
    if(ball.x%30===i){
      trex3.x=70;
      trex1.x=width+100;
      trex2.x=width+100;
    } 
  } 
    if(collide1(skin,skin2)){
    
      gameState="end";
  }
    score++;
    ground.velocity=5+ball.x/500;
    obstacle.velocity=5+ball.x/500;
     if(obstacle.x<-10){
       var r=random(10,800);
      
    obstacle.x=width+r;
    var rand=round(random(1,6));
    
    
    switch(rand){
      case 1:obstacle.img=loadImage("obstacle1.png");
        obstacle.width=25;
        break;
      case 2:obstacle.img=loadImage("obstacle2.png");
        obstacle.width=45;
        break;
      case 3:obstacle.img=loadImage("obstacle3.png");
        obstacle.width=80;
        break;
      case 4:obstacle.img=loadImage("obstacle4.png");
        obstacle.width=30;
        break;
      case 5:obstacle.img=loadImage("obstacle5.png");
        obstacle.width=60;
        break;
      case 6:obstacle.img=loadImage("obstacle6.png");
        obstacle.width=80;
        break;
      default:break;
    }
  }
    if(ground.x<0){
    ground.x=ground.width/2;
  }
     ground.move();
     trex1.move1();
  trex2.move1();
  trex3.move1();
    obstacle.move();
  }
  if(gameState==="end"){
    trex1.x=width+100;
    trex2.x=width+100;
    trex2.x=width+100;
    trex.y=trex1.y;
    trex.x=70;
    game.display();
    restart.display();
  }
  
  
  if(trex1.x<width-20){
    skin2.x=trex1.x-5;
    skin2.y=trex1.y;
  }
  if(trex2.x<width-20){
    skin2.x=trex2.x-5;
    skin2.y=trex2.y;
  }
  if(trex3.x<width-20){
    skin2.x=trex3.x-5;
    skin2.y=trex3.y;
  }
  textSize(20);
  text("Score:"+score,width-130,20);
 
  
   
  collide(inv,trex1);
  collide(inv,trex2);
  collide(inv,trex3);
}
function collide(object1,object2){
  if(object1.y-object2.y<=object1.height/2+object2.height/2&&
    object2.y-object1.y<=object1.height/2+object2.height/2){
     object2.y=object1.y-(object1.height/2+object2.height/2);
    
  }
}
function collide1(object1,object2){
  if(object1.y-object2.y<=object1.height/2+object2.height/2&&
    object2.y-object1.y<=object1.height/2+object2.height/2&&
    object1.x-object2.x<=object1.width/2+object2.width/2&&
    object2.x-object1.x<=object1.width/2+object2.width/2){
    return true;
    
  }
}

function mousePressed(){
  if(trex1.y>height-158 && gameState==="start"){
  trex1.move2();
  trex2.move2();
  trex3.move2();
  }
  if(gameState==="end"&&
      mouseX-restart.x<=restart.width/2 && 
       restart.x-mouseX<=restart.width/2 && 
       mouseY-restart.y<=restart.height/2&&
       restart.y-mouseY<=restart.height/2){
    gameState="start";
    score=0;
    obstacle.x=-100;
    }
}