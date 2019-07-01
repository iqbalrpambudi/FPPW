window.onscroll = function () {
    myFunction();
};
// Sticky Navbar
var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;
// sticky sidebar

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

