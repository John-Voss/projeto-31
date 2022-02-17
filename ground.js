class Ground {
  constructor(x,y) {
    var options = {
      isStatic: true
    }
    this.ground = Bodies.rectangle(x,y,800,10, options);
    World.add(world, this.ground);
  }
  display(){
    var pos = this.ground.position;

    push();
    rectMode(CENTER);
    fill('#B22222');
    rect(pos.x, pos.y, 800, 10);
    pop();
  }
}