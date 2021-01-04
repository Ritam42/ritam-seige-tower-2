class Block  {
  constructor(x, y, width, height){
    var option = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04, 
    }
    this.body = Bodies.rectangle(x, y, width, height, option);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
}
display(){
  if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }
};