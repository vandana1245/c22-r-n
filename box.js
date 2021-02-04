class Box {
    constructor(x,y,w,h) {
        var options = {
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position
        fill(126,16,180);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}