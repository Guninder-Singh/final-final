var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        var activeIndex = swiper.realIndex;
        var partnersHeading = document.querySelector('.partners-heading');
        if (activeIndex === 2) {
          partnersHeading.style.display = 'none';
        } else {
          partnersHeading.style.display = 'block';
        }
      },
    },
  });
