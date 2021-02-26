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
        this.pos= {x:0,y:0};
        this.vel = {x:0,y:0};
        this.size = {x:0,y:0};
        
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



  function Particle() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    this.gravity = 0;
    particleIndex++;
    particles[particleIndex] = this;
    this.id = particleIndex;
    this.life = 0;
    this.maxLife = Math.random() * 30 + 50;
    this.color = "hsla(" + parseInt(Math.random()*255, 10) + ",100%,50%, 0.2)";
  }
  
  Particle.prototype.draw = function() {
    this.x += this.vx;
    this.y += this.vy;
    
    if (Math.random() < 0.1) {
      this.vx = Math.random()*10-5;
      this.vy = Math.random()*10-5;
    }
    this.vy += this.gravity;
    this.life++;
    if (this.life > this.maxLife){
      delete particles[this.id];
    } 
    c.fillStyle = this.color;
    c.fillRect(this.x,this.y,10,10);
  };



/* convert x,y,width,height to top,left,bottom,right

rectFromGameObject() {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width,
    };
  }
  */
