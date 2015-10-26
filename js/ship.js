function Ship(name,x,y,type) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 25;
    this.collide = "None";
    this.destroy = false;
    this.movSpeed = 0.1;
    this.angle=0;
    this.speed=0.01;
    this.radius=0.015;
    var shipSprite = new Image();

    //if(name=="Player"){
    	//	this.Keyboard = new Keyboard();

	//}

    this.lastShoot = new Date();
    this.shootSpeed = 150;
    this.shootType = 0;

    this.type = type;
    this.score = 0;
    this.counter = 0;

	this.draw = function() {
		if(this.type==0){
			var path=new Path2D();
		    path.moveTo(this.x,this.y);
		    path.lineTo(this.x-this.width,this.y+this.height);
		    path.lineTo(this.x+this.width,this.y+this.height);
		    path.lineTo(this.x,this.y);
		    if(this.name=="Player2"){
		    	shipSprite.src = 'img/ship01.png';
		    }else{
				shipSprite.src = 'img/ship02.png';
			}
			ctx.drawImage(shipSprite, this.x-(shipSprite.width/2), this.y);
			
		}else{
			//ctx.shadowColor = 'rgba(100, 100, 255, 1)';
			ctx.fillStyle = '#fff';
			ctx.beginPath();
		    ctx.arc(this.x, this.y, this.width, 0, Math.PI*2);
		    ctx.fillStyle = "#f00";
		    ctx.strokeStyle = "rgba(190, 15, 255, 0.5)";
		    ctx.fill();
		    ctx.closePath();
		}
	};

	this.shoot = function() {
		if(this.x > 0 && this.x < canvas.width && this.y > 0 && this.y < canvas.height && (new Date-this.lastShoot)>this.shootSpeed){
			if(this.shootType==0){
				Bullets.push(new Bullet(this.x,this.y,0.5,2,1,0,this.name));
			}else if(this.shootType==1){
				Bullets.push(new Bullet(this.x-this.width,this.y+this.height,0.5,2,1,0,this.name));
				Bullets.push(new Bullet(this.x+this.width,this.y+this.height,0.5,2,1,0,this.name));
			}
			this.lastShoot = new Date();
		};
	};


	this.clear = function() {
		this.name = "";
		this.x = 0;
		this.y = 0;
		this.type = 0;
		this.score = 0;
		this.counter = 0;
	};

	

		//this.x=50;
	

};