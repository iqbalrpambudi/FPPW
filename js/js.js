window.onscroll = function() 
{
    myFunction()
};
// Sticky Navbar
var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;
var nama;
var telp;

function myFunction() 
{
    if (window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky")
    }
    else
    {
        navbar.classList.remove("sticky");
    }
};


// function GetURLParameter(sParam)
// {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++)
//     {
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam)
//         {
//             return sParameterName[1];
//         }
//     }
// }​


