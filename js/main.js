document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const searchMessage = document.getElementById("search-message");
  
    if (searchBtn && searchInput && searchMessage) {
      searchBtn.addEventListener("click", () => {
        const value = searchInput.value.trim();
  
        if (value) {
          searchMessage.textContent = `Você buscou por: '${value}'`;
        } else {
          searchMessage.textContent = "";
        }
      });
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('#productCarousel');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  carousel.addEventListener('slid.bs.carousel', function (event) {
    const index = event.to;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel2 = document.querySelector('#productCarousel2');
  const dots2 = document.querySelectorAll('#carouselDots2 .dot');
  
  carousel2.addEventListener('slid.bs.carousel', function (event) {
    console.log('Slide atual:', event.to);
    dots2.forEach(dot => dot.classList.remove('active'));
    
    // Ajusta o índice para garantir que esteja dentro do range dos dots
    const dotIndex = event.to % dots2.length;
    if(dots2[dotIndex]) {
      dots2[dotIndex].classList.add('active');
    }
  });
});

