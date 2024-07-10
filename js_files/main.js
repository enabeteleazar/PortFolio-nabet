jQuery(document).ready(function () {
  if (jQuery) {
    console.log('jQuery est inclus à la page.');
} else {
  console.log('jQuery n\'est  pas inclus à la page.');
}

// BTN Scroll To Top
$("h1").text();
$(".scroll").click( function () {
   document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
})

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};

});  //Ready jQuery.


window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}