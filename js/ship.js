function Ship(name,x,y,type,height,width) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.collide = "None";
    this.destroy = false;
    this.movSpeed = 0.1;
    this.angle=0;
    this.speed=0.01;
    this.radius=0.015;
    this.life=3;
    this.isMoving=false;
    var shipSprite = new Image();

    this.flyInTime = 500;

    this.lastShoot = new Date();
    this.shootSpeed = 150;
    this.shootType = 0;

    this.type = type;
    this.score = 0;
    this.counter = 0;

	this.draw = function() {
		if(this.type==0){
		    if(this.name=="Player2"){
		    	shipSprite.src = 'img/ship01.png';
		    }else{
				shipSprite.src = 'img/ship02.png';
			}
			ctx.drawImage(shipSprite, this.x-(shipSprite.width/2), this.y);
			
		}else{
			if(this.name=="Enemy"){
		    	shipSprite.src = 'img/ship_pirate.png';
		    }else if(this.name=="Pirate"){
				shipSprite.src = 'img/enemyShip.png';
			}
			ctx.drawImage(shipSprite, this.x-(shipSprite.width/2), this.y-(shipSprite.height/2));
		}
	};

	this.shoot = function(name,movDir) {
		if(this.x > 0 && this.x < canvas.width && this.y > 0 && this.y < canvas.height && (new Date-this.lastShoot)>this.shootSpeed){
			if(this.shootType==0){
				Bullets.push(new Bullet(this.x,this.y,0.5,2,movDir,0,name));
			}else if(this.shootType==1){
				Bullets.push(new Bullet(this.x-this.width,this.y+this.height,0.5,2,1,0,name));
				Bullets.push(new Bullet(this.x+this.width,this.y+this.height,0.5,2,1,0,name));
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

	this.AIMove = function(){
		this.isMoving = true;
		this.x = this.x- Math.cos(this.angle/2);// * this.radius;// * circle.radius;
		this.y = this.y+ Math.sin(this.angle);// * this.radius;
		this.angle +=0.01;
		this.radius +=0.001;
	};

	this.AIcomeOnBoard = function(){

	}

	this.AIShoot = function(){
		if(Math.random()>0.999){
			this.shoot("Enemy",5);
		}
	}
		//this.x=50;
	

};