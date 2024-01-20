var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView : 2,
  centeredSlides : true,
  effect : 'coverflow',
  coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            // slideShadows : true
        },
   
  // If we need pagination
  // pagination: '.swiper-pagination',
   
  // Navigation arrows
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
    
  }) 