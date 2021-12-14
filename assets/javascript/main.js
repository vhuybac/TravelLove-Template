// slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var e = document.getElementsByClassName("btn-slide");
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
    x[i].style.visibility = "hidden";
    e[i].classList.remove("active");
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.opacity = 1;
  x[myIndex - 1].style.visibility = "visible";
  e[myIndex - 1].classList.add("active");
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
function showSlide(n) {
  var i;
  var e = document.getElementsByClassName("btn-slide");

  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;
    x[i].style.visibility = "hidden";
    e[i].classList.remove("active");
  }
  x[n].style.opacity = 1;
  x[n].style.visibility = "visible";
  e[n].classList.add("active");
}
