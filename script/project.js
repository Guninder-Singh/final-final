var sliderImages = document.querySelectorAll('.image-slider img');
var currentImageIndex = 0;

function changeImage() {
  
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }

  
  sliderImages[currentImageIndex].style.display = 'block';

 
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
}


setInterval(changeImage, 2000);
