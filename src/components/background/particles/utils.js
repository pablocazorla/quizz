// UTILS
var U = {};

U.draw = {};

U.draw.clear = function (ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  return U.draw;
};
U.draw.rect = function (ctx, x, y, width, height) {
  ctx.rect(x, y, width, height);
  ctx.fill();
  return U.draw;
};
U.draw.circle = function (ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
  return U.draw;
};

U.draw.line = function (ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  ctx.stroke();
  return U.draw;
};

U.extend = function () {
  var extended = {};

  // Merge the object into the extended object
  var merge = function (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          // If we're doing a deep merge and the property is an object
          extended[prop] = U.extend(extended[prop], obj[prop]);
        } else {
          // Otherwise, do a regular merge
          extended[prop] = obj[prop];
        }
      }
    }
  };
  // Loop through each object and conduct a merge
  for (var i = 0; i < arguments.length; i++) {
    merge(arguments[i]);
  }

  return extended;
};

U.random = function (min, max) {
  if (min == null && max == null)
    return 0;

  if (max == null) {
    max = min;
    min = 0;
  }
  var r = Math.random();
  return min + Math.floor(r * (max - min + 1));
};

U.loop = function (count, callback) {
  var index = 0;
  while (index < count) {
    callback(index);
    index++;
  }
};

U.frameAnimation = function (callback) {
  var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    var timer = window.setTimeout(e, 1000 / 60);
    return timer;
  };

  return requestAnimFrame(callback);
};

U.color = function (hexColor) {

  var hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  var C = {
    hex: hexColor
  },
    RGB = hexToRgb(hexColor);

  C.fade = function (opacity) {
    var op = opacity > 1 ? 1 : opacity;
    op = op < 0 ? 0 : op;
    return 'rgba(' + RGB.r + ', ' + RGB.g + ', ' + RGB.b + ', ' + op + ')';
  };
  return C;
};

export default U;