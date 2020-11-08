class redBox {
    constructor(x, y, w, h){
        var options = { restitution: 1, isStatic: true};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    show(){
        push();
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }

}