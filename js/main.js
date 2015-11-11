var canvas = document.getElementById("XenonMainWindow");
var ctx = canvas.getContext("2d");

var dx = 0.2;
var dy = 0.2;

var x = 300;
var y = 300;

var Bullets = [];
var Enemies = [];
var particles = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var Player = new Ship("Player",200,canvas.height-200,0,128,32);
var Player2 = new Ship("Player2",canvas.width-200,canvas.height-200,0,128,128);
Player2.playing=0;

for(count=0;count<7;count++){
	Enemies.push(new Ship("Enemy",280+(count*230),200,1,128,128));
	Enemies.push(new Ship("Pirate",360+(count*230),count*10,1,128,128));
}

var UI = new UI();
var Arena = new Arena();

var fps = 0;
var lastLoop = new Date;

function createExplosion(x, y, color, type)
{
	if(type==1){
		var minSize = 5;
		var maxSize = 30;
		var count = 10;
		var minSpeed = 60.0;
		var maxSpeed = 200.0;
		var minScaleSpeed = 1.0;
		var maxScaleSpeed = 4.0;
	}else if(type==2){
		var minSize = 2;
		var maxSize = 3;
		var count = 0.2;
		var minSpeed = 20.0;
		var maxSpeed = 30.0;
		var minScaleSpeed = 1.0;
		var maxScaleSpeed = 4.0;
	}else{
		var minSize = 2;
		var maxSize = 7;
		var count = 3;
		var minSpeed = 60.0;
		var maxSpeed = 100.0;
		var minScaleSpeed = 1.0;
		var maxScaleSpeed = 3.0;
	}

	for (var angle=0; angle<360; angle += Math.round(360/count))
	{
		var particle = new Particle();
		particle.x = x;
		particle.y = y;

		particle.radius = randomFloat(minSize, maxSize);
		particle.color = color;
		particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);

		var speed = randomFloat(minSpeed, maxSpeed);
		particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
		particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);
		particles.push(particle);
	}
}

function randomFloat (min, max)
{
	return min + Math.random()*(max-min);
}

function collideTest(object1,object2){
	if(object1.x < object2.x + object2.width &&
   		object1.x + object1.width > object2.x &&
   		object1.y < object1.y + object2.height &&
   		object1.height + object1.y > object2.y){
			object1.collide=object2.name;
			object2.collide=object1.name;
			return true;
		}else{
			object1.collide="None";
			object2.collide="None";
	}
}

//Main game loop
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	Arena.draw();
	UI.draw();
	UI.levelStart();

		if(rightPressed && Player.x < canvas.width-Player.width) Player.x+=1;
		if(leftPressed && Player.x > Player.width) Player.x-=1;
		if(upPressed && Player.y > 0) Player.y-=1;
		if(downPressed && Player.y < canvas.height-Player.height) Player.y+=1;
		if(shootPressed){
			Player.shootType=0;
			Player.shoot(Player.name,1);
		}
		if(actionPressed){
			Player.shootType=1;
			Player.shoot(Player.name,1);
		}
		if(Player.isMoving){
			createExplosion(Player.x, Player.y+Player.height, "#FF9933",0);
		}
		Player.draw();

	
	//P2
	if(Player2.playing==1){
		if(P2rightPressed && Player2.x < canvas.width-Player2.width/2) Player2.x+=1;
		if(P2leftPressed && Player2.x > Player2.width/2) Player2.x-=1;
		if(P2upPressed && Player2.y > 0) Player2.y-=1;
		if(P2downPressed && Player2.y < canvas.height-Player2.height) Player2.y+=1;
		if(P2shootPressed){
			Player2.shootType=0;
			Player2.shoot(Player2.name,1);
		}
		if(P2actionPressed){
			Player2.shootType=1;
			Player2.shoot(Player2.name,1);
		}
		if(Player2.isMoving){
			createExplosion(Player2.x, Player2.y+Player2.height, "#139933",0);
		}
		Player2.draw();
	}else{
		if(P2shootPressed){
			Player2.playing=1;
		}
	}

	if(Player.collide=="Enemy"){
		Player.score-=100;
		Player.life-=1;
	}

	for(c=0;c<Enemies.length;c++){
		Enemies[c].draw();
		Enemies[c].AIMove();
		Enemies[c].AIShoot();
		if(Enemies[c].isMoving==true){
			createExplosion(Enemies[c].x, Enemies[c].y-Enemies[c].height/2, "#FF9933",2);
		}

		collideTest(Enemies[c],Player);
		
		for(b=0;b<Bullets.length;b++){
			if(Bullets[b].owner!="Enemy"){
				if(collideTest(Enemies[c],Bullets[b])){
					Bullets.splice(b,1);
					createExplosion(Enemies[c].x, Enemies[c].y, "#525252",1);
					createExplosion(Enemies[c].x, Enemies[c].y, "#FF9933",1);
					Enemies.splice(c,1);

					Player.score+=1000;	
				};
			}
		}
	}

	for(c=0;c<Bullets.length;c++){
		Bullets[c].draw();	
		if(Bullets[c].Mdir==1){
			Bullets[c].y-=Bullets[c].speed;
		}else{
			Bullets[c].y+=Bullets[c].speed;
		}

		if(Bullets[c].owner!="Player"){
			if(collideTest(Bullets[c],Player)){
				Bullets.splice(b,1);
				createExplosion(Player.x, Player.y, "#525252",1);
				Player.score-=500;
			}
		}
		

		if(Bullets[c].y < 0 || Bullets[c].y > canvas.height){
			Bullets.splice(c,1);
		}
	}

	for (var i=0; i<particles.length; i++)
	{
		var particle = particles[i];

		particle.update(10);
		particle.draw(ctx);

		if(particle.scale<0.2){
			particles.splice(i,1);
		}
	}

	Arena.y+=Arena.speed;
}
setInterval(draw,5);
//---Main game loop
