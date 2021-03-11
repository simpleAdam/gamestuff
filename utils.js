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


//remvst
limit = (a, b, c) => b < a ? a : (b > c ? c : b);
between = (a, b, c) => b >= a && b <= c;
rnd = (min, max) => random() * (max - min) + min;
distP = (x1, y1, x2, y2) => sqrt((x1 - x2)**2 + (y1 - y2)**2);
dist = (a, b) => distP(a.x, a.y, b.x, b.y);
normalize = x => moduloWithNegative(x, PI);
angleBetween = (a, b) => atan2(b.y - a.y, b.x - a.x);
roundToNearest = (x, precision) => round(x / precision) * precision;
pick = a => a[~~(random() * a.length)];

// Modulo centered around zero: the result will be between -y and +y
moduloWithNegative = (x, y) => {
    x = x % (y * 2);
    if (x > y) {
        x -= y * 2;
    }
    if (x < -y) {
        x += y * 2;
    }
    return x;
};

// Make Math global
const math = Math;
Object.getOwnPropertyNames(math).forEach(n => w[n] = w[n] || math[n]);

TWO_PI = PI * 2;
