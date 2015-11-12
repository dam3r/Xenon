var canvas = document.getElementById("XenonMainWindow");
var ctx = canvas.getContext("2d");

var logo = new Image();

var startingGame = false;
var settingsMenu = true;

var buttonList = [];


//Main game loop
ctx.clearRect(0, 0, canvas.width, canvas.height);

	logo.src = 'img/logo.png';
	logo.onload = function(){
	    ctx.drawImage(logo, canvas.width/4,canvas.height/4);
	  }

	buttonList.push(new Button(canvas.width/3,canvas.height/2-75,"Rozpocznij","Start"));
	buttonList.push(new Button(canvas.width/3,canvas.height/2,"Opcje","Settings"));
	buttonList.push(new Button(canvas.width/2-100,canvas.height/2,"Góra","setup"));
	buttonList.push(new Button(canvas.width/2-100,canvas.height/2+75,"Dół","setup"));
	buttonList.push(new Button(canvas.width/2-100,canvas.height/2+150,"Lewo","setup"));
	buttonList.push(new Button(canvas.width/2-100,canvas.height/2+225,"Prawo","setup"));

	for(c=0;c<buttonList.length;c++){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		/*if(settingsMenu==true && buttonList[c].action=="setup"){
			buttonList[c].visible=1;
		}*/

		if(buttonList[c].visible==1){
			buttonList[c].draw();
		}
	}

