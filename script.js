let button = document.querySelector ('.brand-more__button');
let brandGallery = document.querySelector ('.brand-gallery');

button.addEventListener('click',  function onButtonClick() {
    
    brandGallery.classList.toggle('expand');

    if (brandGallery.classList.contains("expand")) {
      button.textContent = "Скрыть";
    } else {
      button.textContent = "Показать все";
    }
  });

  