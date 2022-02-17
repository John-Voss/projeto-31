class Particle {
    constructor(x,y, r) {
        var options = {
            restitution: 0.2,
            friction: 2,
            density: 1
        }
        if(frameCount%50 === 0) {
            this.ball = Bodies.circle(x,y, r, options);
            this.color = color(random(0, 255), random(0, 255), random(0, 255));
            World.add(world, this.ball);
        }
    }
    display() {
        var pos = this.ball.position;

        push();
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x, pos.y, 20, 20);
        pop();
    }
}