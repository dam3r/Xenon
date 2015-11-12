document.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
      }, false);

function printMousePos(e) {
    var MouseposX = e.clientX;
    var MouseposY = e.clientY;
    for(c=0;c<buttonList.length;c++){
	    if(MouseposX < buttonList[c].x){
	    	alert("T");
	    	buttonList[c].visible=0;
	    }
	}
}

document.addEventListener("click", printMousePos);

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
	}