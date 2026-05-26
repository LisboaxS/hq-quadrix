  let atual = 0;
  const slides = document.querySelectorAll('.carrossel-slide');
  const dots = document.querySelectorAll('.dot');

  function atualizarCarrossel() {
    document.querySelector('.carrossel-track').style.transform = `translateX(-${atual * 100}%)`;
    dots.forEach(d => d.classList.remove('ativo'));
    dots[atual].classList.add('ativo');
  }

  function moverCarrossel(direcao) {
    atual = (atual + direcao + slides.length) % slides.length;
    atualizarCarrossel();
  }

  function irParaSlide(index) {
    atual = index;
    atualizarCarrossel();
  }

  
  setInterval(() => moverCarrossel(1), 7000); 
