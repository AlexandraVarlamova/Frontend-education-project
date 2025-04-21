import '../scss/style.scss';  

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

let serviceButton = document.querySelector ('.service-more__button');
let serviceGallery = document.querySelector ('.service-gallery');

serviceButton.addEventListener('click',  function onButtonClick() {
    
  serviceGallery.classList.toggle('expand');
  serviceButton.classList.toggle('expand');

  if (serviceGallery.classList.contains('expand')) {
    serviceButton.textContent = "Скрыть";
  } else {
    serviceButton.textContent = "Показать все";
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





let sidebar = document.querySelector('.sidebar');
let burger = document.querySelector('.header__burger');
let sidebarBurger = document.querySelector('.sidebar .header__burger');

  
burger.addEventListener('click', function () {
  sidebar.classList.toggle('open'); 

  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('closed'); 
  } else {
    sidebar.classList.add('closed'); 
  }
});

if (sidebarBurger) { 
  sidebarBurger.addEventListener('click', function(event) {
    event.stopPropagation(); 

    sidebar.classList.remove('open'); 
    if (!sidebar.classList.contains('open')) {
      sidebar.classList.add('closed');
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  
  let callButton = document.querySelector('.header__call');
  let callModal = document.querySelector('.modal--call[data-modal="call"]');

  
  let chatButton = document.querySelector('.header__chat');
  let chatModal = document.querySelector('.modal--chat[data-modal="chat"]');

  
  let sidebarCallButton = document.querySelector('.footer__call');
  let sidebarCallModal = document.querySelector('.modal--call[data-modal="sidebar-call-modal"]');

  
  let sidebarChatButton = document.querySelector('.footer__chat');
  let sidebarChatModal = document.querySelector('.modal--chat[data-modal="sidebar-chat-modal"]');

  
  function showModal(modalElement) {
    modalElement.classList.toggle('open'); 
    
    if (modalElement.classList.contains('open')) {
      modalElement.removeAttribute('hidden');
    } else {
      modalElement.setAttribute('hidden');
    }
  }

  
  
  function hideModal(modalElement) {
    modalElement.classList.toggle('open');
  
    if (!modalElement.classList.contains('open')) {
      modalElement.setAttribute('hidden', true);
    } else {
      modalElement.removeAttribute('hidden');
    }
  }

  
  if (callButton) {
    callButton.addEventListener('click', function(event) {
      event.preventDefault();
      showModal(callModal); 
    });
  }

  
  if (chatButton) {
    chatButton.addEventListener('click', function(event) {
      event.preventDefault();
      showModal(chatModal); 
    });
  }

  
  if (sidebarCallButton) {
    sidebarCallButton.addEventListener('click', function(event) {
      event.preventDefault();
      showModal(sidebarCallModal); 
    });
  }

  
  if (sidebarChatButton) {
    sidebarChatButton.addEventListener('click', function(event) {
      event.preventDefault();
      showModal(sidebarChatModal); 
    });
  }

  
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal__close')) {
      let modal = event.target.closest('.modal');
      hideModal(modal);
    }
  });
  
});
