console.log("astral fitness connected!");

document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
});
//gallery functions
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e){
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;
    current.classList.add("fade-in");
    setTimeout(() => current.classList.remove("fade-in"), 500);
    e.target.style.opacity = opacity;
}
