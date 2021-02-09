function clamp(value, min, max) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function lerp(start, end, time) {
    return start * (1 - time) + end * time;
}

function nlerp(a,b,t) {
 return a + (b-a) * ((1-Math.cos(t*Math.PI))/2);
}

function randomisedArrayOfNumbers(len) {
  const perm = [];
  while (perm.length < len){
      while(perm.includes(val = Math.floor(Math.random()*len)));
      perm.push(val);
  }
  return perm
}
