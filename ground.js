class Ground{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=loadImage("ground2.png");
    this.velocity=4
  }
  display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
  }
  move(){
    this.x=this.x-this.velocity;
  }
}