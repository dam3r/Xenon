function Button(x,y,caption){
	this.x = x;
	this.y = y;
	this.width = 150;
	this.height = 50; 
	this.caption = caption;

	this.draw = function(){
		var my_gradient=ctx.createLinearGradient(this.x,this.y,this.x,this.y+this.height);
		my_gradient.addColorStop(0,"#0066FF");
		my_gradient.addColorStop(1,"#003366");
		ctx.fillStyle=my_gradient;
		ctx.fillRect(this.x,this.y,this.width,this.height);
		ctx.fillStyle = "rgba(255,255,255, 1)";
		ctx.font = "22px sans-serif";
		ctx.fillText(this.caption,this.x+this.width/6,this.y+this.height/1.5);
	};
}