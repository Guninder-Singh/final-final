(function() {
      var slider = document.querySelector('.sponsors .slider');
      var images = slider.querySelectorAll('img');

      var currentImage = 0;

      function slide() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
      }

      setInterval(slide, 3000);
    })();
