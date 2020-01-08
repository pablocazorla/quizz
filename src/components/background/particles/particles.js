import U from './utils';

const particles = function (options) {


  var config = U.extend({
    canvas: null,
    numParticles: 120,
    minRadius: 1,
    maxRadius: 5,
    minSpeed: 1,
    maxSpeed: 4,
    linkDistance: 100,
    colorParticles: '#FFFFFF',
    colorLines: '#FFFFFF'
  }, options);

  var canvas = config.canvas;

  if (!canvas) {
    return;
  }


  var particles = [];
  var lines = {};
  var ctx = canvas.getContext('2d');

  //
  ctx.fillStyle = config.colorParticles;


  var lineColor = U.color(config.colorLines);
  ctx.strokeStyle = config.colorParticles;
 // var isMouseover = false;

  var newParticle = (function () {
    var idParticle = 0;
   
    return function (forMouse) {
      var P = {};
      P.x = U.random(0, canvas.width);
      P.y = U.random(0, canvas.height);
      var r = U.random(config.minRadius, config.maxRadius),
        speed = U.random(config.minSpeed, config.maxSpeed) / 10,
        ang = U.random(0, 1999) * Math.PI / 1000,
        speedX = speed * Math.cos(ang),
        speedY = speed * Math.sin(ang);

      P.id = idParticle++;

      P.render = function () {
        
        particles.forEach(function (ps) {
          if (!lines[ps.id + '-' + P.id]) {
            lines[P.id + '-' + ps.id] = true;
            var dx = P.x - ps.x,
              dy = P.y - ps.y,
              distance = Math.sqrt(dx * dx + dy * dy);
            if (distance <= config.linkDistance) {
              ctx.strokeStyle = lineColor.fade(1 - distance / config.linkDistance);
              U.draw.line(ctx, P.x, P.y, ps.x, ps.y);
            }
          }
        });
        if(!forMouse){
          U.draw.circle(ctx, P.x, P.y, r);
        }
        
        return P;
      };
      P.position = function (x, y) {
        P.x = x;
        P.y = y;
        return P;
      };
      P.move = function () {
        if(!forMouse){
          P.x += speedX;
          P.y += speedY;

          if (P.x < 0) {
            P.x = canvas.width;
          }
          if (P.x > canvas.width) {
            P.x = 0;
          }
          if (P.y < 0) {
            P.y = canvas.height;
          }
          if (P.y > canvas.height) {
            P.y = 0;
          }
        }

        return P;
      }
      return P;
    };
  })();


  U.loop(config.numParticles, function () {
    particles.push(newParticle());
  });

  // var mouseParticle = newParticle(true)
  // particles.push(mouseParticle);


  var render = function () {
    lines = {};
    U.draw.clear(ctx, canvas.width, canvas.height);
    ctx.fillStyle = config.colorParticles;
    particles.forEach(function (particle) {
      particle.move().render();
    });
    U.frameAnimation(render);
  }

  render();

  
  // canvas.addEventListener('mouseover',function(){
  //   isMouseover = true;
  // });
  // canvas.addEventListener('mousemove',function(e){
  //   if(isMouseover){
  //     mouseParticle.x = e.pageX - canvas.offsetLeft;
  //     mouseParticle.y = e.pageY - canvas.offsetTop;
  //   }
  // });
  // canvas.addEventListener('mouseout',function(){
  //   if(isMouseover){
  //     isMouseover = false;
  //   }
  // });


};
export default particles;