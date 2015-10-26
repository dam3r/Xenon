function Bullet(x,y,time,speed,Mdir,collide,owner){
	this.name="Bullet";
	this.y=y;
	this.x=x;
	this.width=25;
	this.height=25;
	this.time=time;
	this.owner=0;
	this.speed=speed;
	this.Mdir=Mdir;
	this.collide=collide;

	this.draw = function() {
			ctx.fillStyle = "rgba(0, 0, 0, 1)";
			ctx.beginPath();
		    ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
		    ctx.fillStyle = "#f00";
		    ctx.fill();
		    ctx.closePath();
	};

};