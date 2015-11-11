var canvas = document.getElementById("XenonMainWindow");
var ctx = canvas.getContext("2d");

var logo = new Image();

var startingGame = false;
var settingsMenu = true;


//Main game loop
ctx.clearRect(0, 0, canvas.width, canvas.height);



	logo.src = 'img/logo.png';
	logo.onload = function(){
	    ctx.drawImage(logo, canvas.width/4,canvas.height/4);
	  }
	var StartGame = new Button(canvas.width/3,canvas.height/2-75,"Rozpocznij");
	StartGame.draw();

	var Setting = new Button(canvas.width/3,canvas.height/2,"Opcje");
	Setting.draw();

	if(settingsMenu==true){
		var P1Top = new Button(canvas.width/2-100,canvas.height/2,"Góra");
		P1Top.draw();
		var P1Down = new Button(canvas.width/2-100,canvas.height/2+75,"Dół");
		P1Down.draw();
		var P1Left = new Button(canvas.width/2-100,canvas.height/2+150,"Lewo");
		P1Left.draw();
		var P1Right= new Button(canvas.width/2-100,canvas.height/2+225,"Prawo");
		P1Right.draw();
	}

