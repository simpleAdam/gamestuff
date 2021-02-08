function addListeners(ref) {

const keyModel={}

  function onKeyDown(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    ref.left = true;
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    ref.right = true;
  } else if (e.keyCode === KEY_CODE_SPACE) {
    ref.space = true;
  }
}

function onKeyUp(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    ref.left = false;
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    ref.right = false;
  } else if (e.keyCode === KEY_CODE_SPACE) {
    ref.space = false;
  }
}

window,addEventListner('keydown',onKeyDown)
window,addEventListner('keyup',onKeyUp)

return keyModel
}
