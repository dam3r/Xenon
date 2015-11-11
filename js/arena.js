function Arena(){
	this.level=1;

	this.speed=0.1;
	this.x=0;
	this.y=canvas.height;
	this.name="Poziom 1"

	this.generateMap = function(x,y){
		var map = [];
		for(c=0;c<x;c++){
			map[c]=[];
			for(i=0;i<y;i++){
				map[c][i]=Math.floor((Math.random() * 2) + 1);
			}
		}
		return map;
	}

	var map = this.generateMap(150,40);

	this.tileWidth=canvas.width/map[0].length;
	this.tileHeight=this.tileWidth;
	
	this.draw = function(){
		/*for(c=0;c<map.length;c++){
			for(i=0;i<map[c].length;i++){
				if (map[c][i]==1){
					ctx.fillStyle = "rgba(22, 44, 22, 0.2)";
					ctx.fillRect(i*this.tileWidth,c*this.tileHeight+this.y-map.length*this.tileWidth,this.tileWidth,this.tileHeight);
				}
			}
			if(this.y>canvas.height*2){
				this.y=canvas.height;
				c=0;
			}
		}*/

		//if(this.y > this.tileHeight )this.y=0;
		//ctx.rect(20,20,150,100);
	};
}