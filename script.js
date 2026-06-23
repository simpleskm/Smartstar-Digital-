// =========================
// MOBILE MENU TOGGLE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.innerHTML = navLinks.classList.contains("active")
        ? "&times;"
        : "&#9776;";
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
    });
});


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(11,17,32,0.95)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.25)";
    } else {
        header.style.background = "rgba(11,17,32,0.8)";
        header.style.boxShadow = "none";
    }
});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".card, .portfolio-grid img, .about, .contact-form"
);

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealPoint = 120;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// =========================
// CONTACT FORM
// =========================

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const interest = form.interest.value;
    const message = form.message.value.trim();

    if (!name || !email || !interest || !message) {
        alert("Please complete all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(
        `Thank you ${name}! Your message has been received. We will contact you soon.`
    );

    form.reset();
});


// =========================
// SMOOTH SCROLL OFFSET
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        const headerHeight = document.querySelector(".header").offsetHeight;

        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: "smooth"
        });
    });
});


// =========================
// HERO BUTTON ANIMATION
// =========================

const heroButtons = document.querySelectorAll(".hero .btn");

heroButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });
});


// =========================
// PRELOADER EFFECT
// =========================

window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .6s ease";
        document.body.style.opacity = "1";
    }, 100);
});
