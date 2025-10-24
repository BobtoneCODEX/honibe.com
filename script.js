 $(document).ready(function(){

      // ✅ MENU TOGGLE
      $('#menu-btn').click(function(){
        $('.navdiv ul').addClass('active');
      });

      $('#menu-close').click(function(){
        $('.navdiv ul').removeClass('active');
      });

      // ✅ COUNTER ANIMATION
      const counters = document.querySelectorAll('.count');
      const speed = 200;

     });








const slider = document.getElementById("docSlider");
const images = slider.querySelectorAll("img");
let current = 0;

slider.addEventListener("click", nextImage);
setInterval(nextImage, 5000);

function nextImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

  