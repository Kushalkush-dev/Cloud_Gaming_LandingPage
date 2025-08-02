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
gsap.from("#page1 h1,#page1 h2", {
   
  rotate: 15,
  opacity: 0,
  delay: 0.2,
  duration: 0.7
})

var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"50% 20%",
    end:"50% 0%",
    markers:false,
    scrub:2
  }

})

tl.to("#page1 h1",{
  x:-100
},"head")
tl.to("#page1 h2",{
  x:100
},"head")

tl.to("#page1 video",{
  width:"95%"
},"head")




var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"bottom 50%",
    end:"bottom 40%",
    markers:false,
    scrub:2
  }

})


tl2.to("#page2",{
  backgroundColor:"#fff"
})





var tl3=gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"bottom 50%",
    end:"bottom 40%",
    markers:true,
    scrub:2
  }

})


tl3.to("#page3",{
  backgroundColor:"#000"
})


document.querySelectorAll("#page3 img").forEach((img)=>{
  img.classList.add("img-round")
})

document.querySelectorAll("#page4 img").forEach((img)=>{
  img.classList.add("img-round")
})


document.querySelectorAll("#page4 h1").forEach((h1)=>{
  h1.classList.add("page4headstyle")
})





const cursor=document.getElementById("cursor")
const page5=document.getElementById("page5")


page5.addEventListener("mousemove",(dest)=>{

 cursor.style.left=dest.clientX+"px"
 cursor.style.top=dest.clientY+"px"
 




})









const collection=document.querySelectorAll("#collection")
 collection.forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
   let img=elem.getAttribute("data-image")

   cursor.classList.add("cursor-collection")
   cursor.style.backgroundImage=`url(${img})`

    
  })


  elem.addEventListener("mouseleave",()=>{
    cursor.classList.remove("cursor-collection")
    

  })

 })