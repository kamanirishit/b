class Obstacle{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.velocity=4
    this.rand1=round(random(1,6));
    switch(this.rand1){
      case 1:this.img=loadImage("obstacle1.png");
        this.width=25;
        break;
      case 2:this.img=loadImage("obstacle2.png");
        this.width=45;
        break;
      case 3:this.img=loadImage("obstacle3.png");
       this.width=80;
        break;
      case 4:this.img=loadImage("obstacle4.png");
        this.width=30;
        break;
      case 5:this.img=loadImage("obstacle5.png");
        this.width=60;
        break;
      case 6:this.img=loadImage("obstacle6.png");
        this.width=80;
        break;
      default:break;
    }
  }
  display(){
    push();
    imageMode(CENTER);
    image(this.img,this.x,this.y,this.width,this.height);
    pop();
  }
  move(){
    this.x=this.x-this.velocity;
  }
}