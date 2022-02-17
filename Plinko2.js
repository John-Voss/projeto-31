class Plinko2{
    constructor(x,y) {
        var options = {
            restitution: 0.2,
            friction: 5,
            isStatic: true
        }
        this.plinko2 = Bodies.circle(x, y, 10, options);
        //this.r = 20
        World.add(world, this.plinko2);
    }
    display() {
        var pos = this.plinko2.position;

        push();
        for (let p = 25; p <= 750; p=p+45) {
            fill('red');
            ellipseMode(CENTER);
            ellipse(p, pos.y, 20, 20);
        }
        pop();
    }
}