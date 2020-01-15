// $(document).ready(function () {
//     // $("#links").hide();
//     $("#menu-btn").click(changeNav);

//     function changeNav() {
//         $("#links").toggle(2000);
//         $("#menu-btn").toggleClass("turn");
//     }
// });


$(document).ready(function () {

    $("#menu-btn").click(changeNav);

    function changeNav() {
        $("#nav-links").toggle(2000);
        $("#menu-btn").toggleClass("turn");
    }

    // $(window).on('resize', function () {
    //     var win = $(this);
    //     if (win.width() >= 768) {
    //         $("#nav-links").css("display", "flex");
    //     }
    //     if (win.width() < 768) {
    //         if (!document.getElementById("menu-btn").classList.contains("turn")) {
    //             $("#nav-links").css("display", "none");
    //         }
    //         else {
    //             $("#nav-links").css("display", "block");
    //         }
    //     }
    // });

});
