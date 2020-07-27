class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    var options = {
      'restitution':2.0,
      'friction':1.0,
      'density':0.1
  }
    this.image = loadImage("sprites/wood1.png");
  }

};
