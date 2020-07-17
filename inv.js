class Invisible{
  constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    
  }
  display(){
    push();
    noFill();
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}