const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) *30}%`;
})






// SWIPER

let keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

let slider = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
});

// SLIDE ANIMATIONS

slider.on("slideChange", function() {
    gsap.to(".slide-text span", 0.2, {
        x: "-100px"
    })
    gsap.to(".slide-number span", 0.2, {
        x: "-100px"
    })
    gsap.to(".slide-detail span", 0.5, {
        x: "-1000px"
    })
    gsap.to(".slide-detail-facts div", 0.5, {
        x: "-1000px"
    })
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 0.85
    })
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 20
    })
})


slider.on("slideChangeTransitionEnd", function() {
    gsap.to(".slide-text span", 0.2, {
        x: 0,
        delay: 0.1
    })
    gsap.to(".slide-text span", 0.2, {
        x: "100px",
    })

    gsap.to(".slide-number span", 0.2, {
        x: 0,
        delay: 0.1
    })

    gsap.to(".slide-number span", 0.2, {
        x: "100px",
    })

    gsap.to(".slide-detail span", 0.5, {
        x: 0
    })
    gsap.to(".slide-detail-facts div", 0.5, {
        x: 0
    })
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
    })
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation: 10
    })
})