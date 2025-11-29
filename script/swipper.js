// Verifica se existe o elemento antes de iniciar para evitar erros em outras páginas
if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      
      // Configurações do efeito 3D (Refinado)
      coverflowEffect: {
        rotate: 0,      
        stretch: 0,     
        depth: 100,     
        modifier: 2.5,  
        slideShadows: true, 
      },
  
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // UX: Para o carrossel se o mouse estiver em cima
      },
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      // BREAKPOINTS: Responsividade melhorada
      breakpoints: {
        // Celulares
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // Tablets (Novo)
        640: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        // Desktops
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
}
