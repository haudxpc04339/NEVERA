window.onscroll = function() {myFunction()};
var header = document.getElementById("menu");
var sticky = header.window.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
     header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}