// set date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

// toggle navbar
var btn = document.getElementById("nav-toggle");
var links = document.getElementById("nav-links");

btn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});


// fixed navbar
var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 62) {
        navbar.classList.add("fixed");
    }
    else {

        navbar.classList.remove("fixed");
    }
});

// smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
    link.addEventListener("click", e => {

        e.preventDefault();

        // remove without click on bars
        links.classList.remove("show-links");

        // get id and delete #
        const id = e.target.getAttribute("href").slice(1);

        const element = document.getElementById(id);

        // position
        let position;
        if (navbar.classList.contains("fixed")) {
            position = element.offsetTop - 62;
        }
        else {
            if (window.innerWidth < 992) {
                position = element.offsetTop - 332 - 62;
            }
            else {
                position = element.offsetTop - 124;
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
