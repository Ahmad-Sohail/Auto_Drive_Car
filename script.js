let s = gsap.timeline();
s.from(".nav_first", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
})
.from(".nav_links a", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.35    
})
.from("#first_head",{
    x: -30,
    // scale: 0.2,
    opacity: 0,
    duration: 0.6,   
})
.from(".sec_head",{
    x: 30,
    // scale: 0.2,
    opacity: 0,
    duration: 0.6,
})


gsap.from("#about_first_head",{
    x: -90,
    // scale: 0.2,
    opacity: 0,
    duration: 0.6,
    // delay: 0.5,
    scrollTrigger:{
        trigger: "#about_first_head",
        // scroller: "body",
        start: "top 70%",
        end: "top -10%",
        // markers: true,
        // pin: true
        // scrub: 1,
    }
})

gsap.from("#about_sec_head",{
    x: 20,
    scale: 0.2,
    opacity: 0,
    duration: 0.6,
        // delay: 0.55,
    scrollTrigger:{
        trigger: "#about_sec_head",
        // scroller: "body",
        start: "top 75%",
        end: "top -10%",
        // markers: true,
        // pin: true
        // scrub: 1,
    }
})

gsap.from("#about_third_head",{
    x: 80,
    opacity: 0,
    duration: 1,
    // delay: 0.55,
    scrollTrigger:{
        trigger: "#about_third_head",
        // scroller: "body",
        start: "top 70%",
        end: "top -100%",
        // markers: true,
        // scrub: 1,
    }
})



// // ---------------------------------------------------
gsap.from("#video_head_first",{
    x: 500,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    scrollTrigger:{
        trigger: ".video_head",
        // scroller: "body",
        start: "top 70%",
        end: "top -10%",
        // markers: true,
    }
})
gsap.from("#video_head_sec",{
    x: -500,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    scrollTrigger:{
        trigger: ".video_head",
        // scroller: "body",
        start: "top 70%",
        end: "top -10%",
        // markers: true,
    }
})

gsap.from(".video video",{
    scale: 0.3,
    opacity: 0,
    transformOrigin: "top center",
    scrollTrigger:{
        trigger: ".video_page",
        // scroller: "body",
        start: "top 100%",
        end: "top -10%",
        // markers: true,
        scrub: 2,
    }
})

gsap.to("#footer_head h1", {
    transform: "translateX(-180%)",
        scrollTrigger:{
        trigger: "#footer_head",
        // scroller: "body",
        // markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})

let main = document.querySelector("#main");

main.addEventListener("mousemove", function(e){
    gsap.to("#miniCircle",{
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out"
    })
})



let images = document.querySelectorAll("#car_container_1 .image_card img")


for (let img of images) {
    img.addEventListener("mouseenter", function (e) {
        gsap.to("#miniCircle", {
            scale: 8,
            backgroundColor: "black",
        })
    document.querySelector("#miniCircle").innerHTML = `<i class="fa-solid fa-arrow-right"></i>`   
    })
}

for (let img of images) {
    img.addEventListener("mouseleave", function (e) {   
        document.querySelector("#miniCircle i").style.display = "none"   
        gsap.to("#miniCircle", {
            scale: 1,
            backgroundColor: "White",
            duration: 0.1  
        })
    })    
}
