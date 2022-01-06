<!-- mouse trail -->

var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};


for (var i = 0; i < 10; i++) {
  var d = new Dot();
  dots.push(d);
}

function draw() {
  var x = mouse.x,
      y = mouse.y;
  
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .5;
    y += (nextDot.y - dot.y) * .5;

  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

<!-- mouse change on hover -->

var cursor = $(".cursor"),
    follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX-13;
                mouseY = e.pageY-13;
            });

            $(".column h1").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".column h1").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".column h2").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".column h2").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".column h3").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".column h3").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box1").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box1").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box2").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box2").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box3").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box3").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box4").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box4").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box5").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box5").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box6").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box6").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box7").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box7").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box8").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box8").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box9").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box9").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".box10").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".box10").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".footerbox h3").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".footerbox h3").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".footerbox h4").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".footerbox h4").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".footerbox h5").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".footerbox h5").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
