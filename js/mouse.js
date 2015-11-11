document.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
      }, false);

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
	}