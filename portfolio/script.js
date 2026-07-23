const roles = [
    "Python Full Stack Developer",
    "Django Developer",
    "Frontend Developer",
    "React Developer",
    "MySQL Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ================= Counter Animation ================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let count = 0;

        const update = () => {

            count += target / 100;

            if (count < target) {

                counter.innerText = Math.ceil(count);
                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => counterObserver.observe(counter));

/* ================= Sticky Header ================= */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    header.classList.toggle("sticky",window.scrollY>50);

});


/* ================= Back To Top ================= */

const topBtn=document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

}

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

/* ================= Active Menu ================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});