window.onload = () => {
    const images = document.querySelectorAll(".hero-img");
    setTimeout(() => {
        images.forEach((img) => {
            img.classList.add("visible");
        });
    }, 100); 
    };
    const images = document.querySelectorAll(".hero-img");
    console.log(images)
    const heroText = document.getElementById("heroText");
        images.forEach((img) => {

        img.addEventListener("mouseenter", () => {
            heroText.classList.add("text-outline");
            gsap.to(heroText, { zIndex: 0, duration: 0.3 });
            gsap.to(img.querySelector(".hidden-text"), { opacity: 1});
            images.forEach((otherImg) => {
                if (otherImg !== img) {
                    gsap.to(otherImg.querySelector(".image"), { opacity: 0, duration: 0.3 });
                    gsap.to(otherImg.querySelector(".outline"), { borderColor: "#4f4f4f", duration: 0.3 });
                    gsap.to(otherImg.querySelectorAll(".diagonal"), { background: "#4f4f4f", duration: 0.3 });
                    heroText.classList.add("text-outline");
                    gsap.to(heroText, { zIndex: 0, duration: 0.3 });
                    gsap.to(otherImg.querySelector(".hidden-text"), { opacity: 0,duration:0.1});
                }
            });
        });

        img.addEventListener("mouseleave", () => {
            images.forEach((otherImg) => {
                gsap.to(otherImg.querySelector(".image"), { opacity: 1, duration: 0.3 });
                gsap.to(otherImg.querySelector(".outline"), { borderColor: "rgba(255, 255, 255, 0)", duration: 0.3 });
                gsap.to(otherImg.querySelectorAll(".diagonal"), { background: "rgba(255, 255, 255, 0)", duration: 0.3 });
                heroText.classList.remove("text-outline");
            gsap.to(heroText, { zIndex: 2, duration: 0.3 });
            gsap.to(".hidden-text", { opacity: 0});
            });
        });


        img.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = (e.clientX - (left + width / 2)) / width * 480;
            const y = (e.clientY - (top + height / 2)) / height * 480;

            gsap.to(img, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        img.addEventListener("mouseleave", () => {
            gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
        });
    });