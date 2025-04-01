let button = document.querySelector ('.brand-more__button');
let brandGallery = document.querySelector ('.brand-gallery');

button.addEventListener('click',  function onButtonClick() {
    
    brandGallery.classList.toggle('expand');
    button.classList.toggle('expand');

    if (brandGallery.classList.contains('expand')) {
      button.textContent = "Скрыть";
    } else {
      button.textContent = "Показать все";
    }
  });
  
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            enabled: false,
            pagination: false
        }
    }
});
