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

const keyModel=addListeners()
