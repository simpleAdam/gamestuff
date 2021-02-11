/* hopefully some entity classes examples */

class Projectile {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.power = 20;
        this.speed = 5;
    }
    update(){
        this.x += this.speed;
    }
    drawCanvas(ctx){
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fill();
    }
}



function Bullet(x, y, vely, w, h, color) {
	this.x = x;
	this.y = y;
	this.vely = vely;
	this.width = w;
	this.height = h;
	this.color = color;
};

Bullet.prototype.update = function() {
	this.y += this.vely;
};




class EntityWithTraits {
    constructor() {
        this.pos= new Vec2(0,0);
        this.vel = new Vec2(0,0);
        this.size = new Vec2(0,0)
        
        this.traits=[];
    }
    
    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME]=trait;
        
    }
    
    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        })
    }
}
