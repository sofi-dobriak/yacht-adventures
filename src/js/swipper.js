const swiper = new Swiper('.swiper', {
  loop: true,

  slidesPerView: 1,
  spaceBetween: 16,
  watchOverflow: false,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination-button',
    bulletActiveClass: 'active',
  },
});

document.querySelector('.next').style.display = 'flex';
document.querySelector('.prev').style.display = 'flex';
swiper.update();
