const filtros = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');

filtros.forEach(botao => {

    botao.addEventListener('click', () => {

        filtros.forEach(f => f.classList.remove('ativo'));
        botao.classList.add('ativo');

        const categoria = botao.dataset.filtro;

        cards.forEach(card => {

          if (
              categoria === 'todos' ||
              card.dataset.categoria === categoria
          ) {
              card.style.display = 'inline-block';
          } else {
              card.style.display = 'none';
          }

        });

    });
});


const pesquisa = document.getElementById('pesquisaCatalogo');

pesquisa.addEventListener('keyup', () => {

    const termo = pesquisa.value.toLowerCase();

    cards.forEach(card => {

        const titulo = card
            .querySelector('.linkCard a')
            .textContent
            .toLowerCase();

        card.style.display =
            titulo.includes(termo)
                ? 'inline-block'
                : 'none';

    });

});