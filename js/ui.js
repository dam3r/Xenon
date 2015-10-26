function UI(){
	this.x = 0;
	this.y = canvas.height-20;
	
	this.draw = function(){
		ctx.fillStyle = "rgba(0, 0, 0, 1)";
		ctx.font = "20px Arial";
		ctx.fillText("P1:"+Player.score+" "+Bullets.length,0,canvas.height-20);
		ctx.fillText("P2:"+Player2.score+" "+Bullets.length,canvas.width/2,canvas.height-20);
	};

	this.drawFPS = function(fps){
		ctx.font = "20px Arial";
		ctx.fillText("FPS"+fps,150,canvas.height-20);	
	}
}