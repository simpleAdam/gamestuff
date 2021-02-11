function addListeners() {
  const keyModel={}

  function onKeyDown(e) {
  if (e.key === "ArrowLeft") {
    keyModel.left = true;
  } else if (e.key === "ArrowRight") {
    keyModel.right = true;
  } else if (e.key === " ") {
    keyModel.space = true;
  }
}

function onKeyUp(e) {
  if (e.key === "ArrowLeft") {
    keyModel.left = false;
  } else if (e.key === "ArrowRight") {
    keyModel.right = false;
  } else if (e.key === " ") {
    keyModel.space = false;
  }
}

window.addEventListener('keydown',onKeyDown)
window.addEventListener('keyup',onKeyUp)

return keyModel
} 



// version 2
function InputHandler() {
	this.down = {};
	this.pressed = {};
	// capture key presses
	var _this = this;
	document.addEventListener("keydown", function(evt) {
		_this.down[evt.keyCode] = true;
    console.log(evt.keyCode)
	});
	document.addEventListener("keyup", function(evt) {
		delete _this.down[evt.keyCode];
		delete _this.pressed[evt.keyCode];
	});
};

InputHandler.prototype.isDown = function(code) {
	return this.down[code];
};

InputHandler.prototype.isPressed = function(code) {
	if (this.pressed[code]) {
		return false;
	} else if (this.down[code]) {
		return this.pressed[code] = true;
	}
	return false;
};



// version 3
let keys={last:''}
window.addEventListener('keydown',(e) => {
	keys.last=e.key
	keys[e.key]=true
})
window.addEventListener('keyup',(e) => {
	keys[e.key]=false
})
