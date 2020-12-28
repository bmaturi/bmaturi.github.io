var text = "I'm a Full stack developer.";

var chars = text.split('');
var container = document.getElementById("short-desc");

var i = 0;
setInterval(function () {
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
        i = 0;
        container.innerHTML = "&nbsp;";
    }
}, 80);

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}