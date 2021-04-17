var mySwiper1 = new Swiper('.catalogue-swiper', {
  // Optional parameters
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  // slidesPerGroupSkip: 1,
  slidesPerColumnFill: 'row',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});

var mySwiper2 = new Swiper('.publish-swiper', {
  // Optional parameters
  slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      // loop: true,
      // loopFillGroupWithBlank: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})

var mySwiper3 = new Swiper('.partners-swiper', {
  // Optional parameters
  slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})

