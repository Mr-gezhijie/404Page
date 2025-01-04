var source = "http://www.w3.org/2000/svg";
var svg = document.querySelector("svg");
var random = gsap.utils.random;
var somePI = Math.PI * 2;
var tl = gsap.timeline();
for (var i = 0; i < 30; i++) {
    createCircle();
  }
function createCircle() {
    var circle = document.createElementNS(source, "circle");
    svg.appendChild(circle);

    var radius = random(0,1) < 0.15 ? random(80, 130) : random(30, 80);
    gsap.set(circle, {
        attr: { 
            r: 1.1, 
            cx: "50%", 
            cy: "60%",
        },
    x: random(-somePI, somePI),
    y: random(-somePI, somePI)
      
    });

    gsap.to(circle, random(3, 6),
          {

        x: "+=" + somePI,
        repeat: -1,
        modifiers: {
          x: x => Math.cos(parseFloat(x)) * radius
           } 
        
        }
        
        );   
      gsap.to(circle, random(2, 6),
            {
        y: "+=" + somePI,
        repeat: -1,
        modifiers: {
          y: y=> Math.sin(parseFloat(y)) * radius + "px"
          } });
}
 


/// animaton for eyeball
// let tl = gsap.timeline();
gsap.set(".follower", {
    xPercent: -50, 
    yPercent: -50
})

var follow = document.querySelector("#eball1");

window.addEventListener('mousemove', e => {
    gsap.to(follow, 0.5, {
        x:e.clientX,
        y:e.clientY,
        
    })
})

var pupil = document.querySelector(".pupil");
var maxTrans = 30;

let maxXDis, maxYDis;
let centerX, centerY;

function resize() {
    maxXDis = innerWidth / 3.5;
    maxYDis = innerHeight / 3.5;
    const eyeArea = pupil.getBoundingClientRect();
    const R  = eyeArea.width / 3.5;
    centerX  = eyeArea.left + R;
    centerY = eyeArea.top + R;
}
function updateTrans(e) {
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    const xPercent = x / maxXDis;
    const yPercent = y / maxYDis;
    const scaleXPercent = xPercent * maxTrans;
    const scaleYPercent = yPercent * maxTrans;
    gsap.to(".pupil", {
        xPercent: scaleXPercent,
        yPercent: scaleYPercent,
        duration: .2,
        overwrite: 'auto'
    })
}   
window.addEventListener('resize',resize);
resize();
document.querySelector("body").addEventListener('mousemove',updateTrans)