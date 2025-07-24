const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),   //el here refers ot the toop level element ;;here the main div is the top level element
    smooth: true
});

//gsap animations
function firstPageAnim(){
    var tl=gsap.timeline();

    tl.from("#nav",{
            y:"-10",
            opacity:0,
            duration:1.5,
            ease:Expo.easeInOut
    })
    .to(".boundingelem",{
            y:"10",
            ease:Expo.easeInOut,
            duration:1,
            delay:-1,
            stagger:.2
        })
        
        .from(".herofooter",{
            y:"-10",
            opacity:0,
            delay:-1,
            ease:Expo.easeInOut,
            duration:1.2
    })
}


//function for the circlelike cursor-->we want the cursor to move in sync with the mouse pointer

function circleMouseFollower(){
    window.addEventListener('mousemove',function(details){
        this.document.querySelector('#circleCursor').style.transform=`translate(${details.clientX}px,${details.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();    


//function to get the pics in flow to teh topics
//logic::teeno element ko select karomuske baaad ek mousemove lagao,,jab mouse move ho ,to ye pta karo ki maouse kaha se kaha par hai..which means...nouse ki x and y positions pta karo...ab nouse ke x y pos ke badle us image ko show karo andd  us image ko move karo..move karte waqt rotate karo and jaise jaise mouse tex chale waisse waise rotation bhi tex ho jaye


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});