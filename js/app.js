$("#myName").fadeIn(3000);
$("#myTitle").fadeIn(2000);

// show navbar
var navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", function() {
  $("#nav-links").toggle(2000);
});

// smooth links
var links = document.querySelectorAll(".nav-link");
links.forEach(function(item, index) {
  item.addEventListener("click", function(e) {
    e.preventDefault();

    // get id and delete #
    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);

    // position
    let position;
    if ($("#nav").attr("class") == "fixed") {
      if (window.innerWidth < 768) {
        position = element.offsetTop - 330;
      } else {
        position = element.offsetTop - 65;
      }
    } else {
      if (window.innerWidth < 768) {
        position = element.offsetTop - 660;
      } else {
        position = element.offsetTop - 130;
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

// fixed navbar
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 60) {
    $("#nav").attr("class", "fixed");
  } else {
    $("#nav").attr("class", "");
  }
});
