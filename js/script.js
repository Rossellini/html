

const burguer = document.querySelector('nav svg');


burguer.addEventListener('click', () => {
    if (burguer.classList.contains('active')) {
        gsap.to(".links", { x: "100%" })
        gsap.to("line", { stroke: "white" });
        gsap.set("body", { overflow: "auto" });
        gsap.set("body", { overflowX: "hidden" });
    } else {
        gsap.to(".links", { x: "0%" })
        gsap.to("line", { stroke: "black" });
        gsap.fromTo(
            ".links a",
            { opacity: 0, y: -30 },
            { opacity: 1, delay: 0.4, stagger: 0.3, y: 20 }
        );
        gsap.set("body", { overflow: "hidden" });
    }

    burguer.classList.toggle("active");
});



const videos = gsap.utils.toArray('.video');

videos.forEach((videos) => {
    ScrollTrigger.create({
        trigger: videos,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            videos.play()
        },
        onEnterBack: () => videos.play(),
        onLeave: () => videos.pause(),
        onLeaveBack: () => videos.pause()
    })
})

