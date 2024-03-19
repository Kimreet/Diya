gsap.registerPlugin(ScrollTrigger);

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".banner",
                pin: true,
                start: "top top",
                end: "+=150%",
                scrub: 0.1,
                markers: true,
                ease: "none",
                },
        });

        t1.fromTo(
            ".bannertext",
            { y: 440, scale: 1 },
            { y: "10%", scale: 0.6 },
            "abc"
        )
            .fromTo(
                ".bannertext",
                { x: "0" },
                { x: "-100" },
            )
            .fromTo(
                ".bannerimg",
                { width: "100vw", height: "100vh", top: 0, left: 0 },
                { width: 140, height: 70, top: "34%", left: "41%" },"abc"
            );
   
            t1.to(".text1 , .text2 ,.bb-left ,.bb-right", { y: 0,x:0, duration: 0.4 }); 
            t1.to(".navigation", { y: 0, duration: 0.4 }); 

            



