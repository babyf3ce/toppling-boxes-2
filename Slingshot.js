class Slingshot {
  constructor(body1, point2) {
    var options = {
      bodyA: body1.body,
      pointB: point2,
      stiffness: 0.04,
      length: 15,
    };
    // two objects making them connect to a rope connecting to each other more at line 42 sketch.js
    this.sling = Constraint.create(options);
    this.Sling1 = loadImage("sprites/sling1.png");
    this.Sling2 = loadImage("sprites/sling2.png");
    this.Sling3 = loadImage("sprites/sling2.png");
    World.add(world, this.sling);
  }
  display() {
    //if bodyA =null then this happends
    image(this.Sling1, 205, 192);
    image(this.Sling2, 180, 192);
    if (this.sling.bodyA) {
      push();
      strokeWeight(10);
      line(
        this.sling.bodyA.position.x + 10,
        this.sling.bodyA.position.y + 10,
        this.sling.pointB.x + 20,
        this.sling.pointB.y - 25
      );
      line(
        this.sling.bodyA.position.x + 10,
        this.sling.bodyA.position.y + 10,
        this.sling.pointB.x - 20,
        this.sling.pointB.y - 20
      );
      pop();
    }
  }
  //function to null to activate the if condition
  fly() {
    this.sling.bodyA = null;
  }
}
