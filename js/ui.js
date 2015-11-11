function UI(){
	this.x = 0;
	this.y = canvas.height-20;
	this.time = 300;
	
	this.draw = function(){
		ctx.fillStyle = "rgba(255,255,255, 1)";
		ctx.font = "20px sans-serif";
		ctx.fillText("Gracz 1:"+Player.score+" "+Bullets.length+" "+particles.length,0,canvas.height-20);
		if(Player2.playing==1){
			ctx.fillText("Gracz :"+Player2.score+" "+Bullets.length,canvas.width/2,canvas.height-20);
		}else{
			ctx.fillText("Naciśnij C aby rozpocząć",canvas.width/2,canvas.height-20);
		}
	};

	this.drawFPS = function(fps){
		ctx.font = "20px sans-serif";
		ctx.fillText("FPS"+fps,150,canvas.height-20);	
	}

	this.levelStart = function(){
		if(this.time > 0){
			ctx.font = "100px sans-serif";
			ctx.fillStyle = "rgba(255,255,255, 1)";
			ctx.fillText(Arena.name,canvas.width/2-270,canvas.height/2);
			this.time=this.time-1;
		}
	}
}