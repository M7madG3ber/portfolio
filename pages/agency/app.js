// stop link in logo
document.getElementById("logo").addEventListener("click", function (e) {
    e.preventDefault();
});

// select icon navbar and links
var navToggle = document.querySelector(".logo i");
var links = document.querySelectorAll(".nav-links");

// show vs. hide links
navToggle.addEventListener("click", function () {
    links.forEach(function (link, index) {
        link.classList.toggle("show");
        if (navToggle.classList.contains("fa-arrow-down")) {
            navToggle.classList.remove("fa-arrow-down");
            navToggle.classList.add("fa-arrow-up");
        }
        else {
            navToggle.classList.remove("fa-arrow-up");
            navToggle.classList.add("fa-arrow-down");
        }
    });
});

// fixed navbar
var navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 62) {
        navbar.classList.add("fixed");
    }
    else {
        navbar.classList.remove("fixed");
    }
});


// smooth scroll
var scrollLinks = document.querySelectorAll(".nav-links a");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        // get id and delete #
        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // position
        let position;
        if (navbar.classList.contains("fixed")) {
            if (window.innerWidth < 650) {
                position = element.offsetTop - 270;
            }
            else {
                position = element.offsetTop - 60;
            }
        }
        else {
            if (window.innerWidth < 650) {
                position = element.offsetTop - 550;
            }
            else {
                position = element.offsetTop - 120;
            }
        }

        // window scrollTo
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});