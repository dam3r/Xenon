var canvas = document.getElementById("XenonMainWindow");
var ctx = canvas.getContext("2d");

var dx = 0.2;
var dy = 0.2;

var x = 300;
var y = 300;

var Bullets = [];
var Enemies = [];

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var Player = new Ship("Player",200,canvas.height-200,0);
var Player2 = new Ship("Player2",canvas.width-200,canvas.height-200,0);


Enemies.push(new Ship("Enemy",canvas.width/2,canvas.height/2,1));
//Enemies.push(new Ship("Enemy",125,52,1));
//Enemies.push(new Ship("Enemy",225,52,1));

var UI = new UI();
var Arena = new Arena();

var fps = 0;
var lastLoop = new Date;

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
	var thisLoop = new Date;
    var fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
 

	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(rightPressed && Player.x < canvas.width-Player.width) Player.x+=1;
	if(leftPressed && Player.x > Player.width) Player.x-=1;
	if(upPressed && Player.y > 0) Player.y-=1;
	if(downPressed && Player.y < canvas.height-Player.height) Player.y+=1;
	if(shootPressed){
		Player.shootType=0;
		Player.shoot();
	}
	if(actionPressed){
		Player.shootType=1;
		Player.shoot();
	}

	//P2
	if(P2rightPressed && Player2.x < canvas.width-Player2.width) Player2.x+=1;
	if(P2leftPressed && Player2.x > Player2.width) Player2.x-=1;
	if(P2upPressed && Player2.y > 0) Player2.y-=1;
	if(P2downPressed && Player2.y < canvas.height-Player2.height) Player2.y+=1;
	if(P2shootPressed){
		Player2.shootType=0;
		Player2.shoot();
	}
	if(P2actionPressed){
		Player2.shootType=1;
		Player2.shoot();
	}

	Arena.draw();
	UI.draw();
	Player.draw();
	Player2.draw();
	//Player.update();

	if(Player.collide=="Enemy"){
		Player.score-=100;
	}

	for(c=0;c<Enemies.length;c++){
		Enemies[c].draw();
		Enemies[c].x = Enemies[c].x+ Math.cos(Enemies[c].angle) * Enemies[c].radius;// * circle.radius;
		Enemies[c].y = Enemies[c].y+ Math.sin(Enemies[c].angle) * Enemies[c].radius;
		Enemies[c].angle +=0.01;
		Enemies[c].radius +=0.001;

		collideTest(Enemies[c],Player);
		
		for(b=0;b<Bullets.length;b++){
			if(collideTest(Enemies[c],Bullets[b])){
				Bullets.splice(b,1);
				Enemies.splice(c,1);
				Player.score+=1000;	
			};
		}
	}

	for(c=0;c<Bullets.length;c++){
		Bullets[c].draw();
		Bullets[c].y-=Bullets[c].speed;

		collideTest(Bullets[c],Player);

		if(Bullets[c].y < 0 || Bullets[c].y > canvas.height){
			Bullets.splice(c,1);
			Player.score+=1;
		}
	}
	Arena.y+=Arena.speed;
}
setInterval(draw,0.1);
//---Main game loop
