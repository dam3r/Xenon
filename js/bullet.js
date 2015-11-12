function Bullet(x,y,time,speed,Mdir,collide,owner){
	this.name="Bullet";
	this.y=y;
	this.x=x;
	this.width=10;
	this.height=25;
	this.time=time;
	this.owner=owner;
	this.speed=speed;
	this.Mdir=Mdir;
	this.collide=collide;
	var bulletSprite = new Image();

	this.draw = function() {
			ctx.fillStyle = "rgba(0, 0, 0, 1)";
			ctx.beginPath();
		    ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
		    if(owner=="Player" || owner=="Player2"){
		    	bulletSprite.src = 'img/rocket.png';
		    	//ctx.fillStyle = "#fff";
		    	ctx.drawImage(bulletSprite, this.x-5, this.y,10,50);
		    }else{
		    	bulletSprite.src = 'img/rocketEnemy.png';
		    	ctx.drawImage(bulletSprite, this.x-5, this.y,10,50);
		    	//ctx.fillStyle = "#f00";
			}
		    ctx.fill();
		    ctx.closePath();
	};

};