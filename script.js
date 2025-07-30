function locomotiveScrollInit(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}


locomotiveScrollInit()



// var tl=gsap.timeline({
//   scrollTrigger:{
//     trigger:"#main page1",
//     scroller:"#main",          //alternative trigger based on page
//     start:"20% 20%",
//     end:"20% 0%",
//     markers:true,
//     scrub:2
//   }

// })


var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#main h1",
    scroller:"#main",
    start:"top 20%",
    end:"top 0%",
    markers:true,
    scrub:2
  }

})

tl.to("#main page h1",{
  x:-100
},"head")
tl.to("#main h2",{
  x:100
},"head")

tl.to("#main video",{
  width:"95%"
},"head")