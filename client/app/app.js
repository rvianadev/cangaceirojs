let controller = new NegociacaoController();

// associa o evento de submissão do formulário à chamada do método "adiciona"

document
  .querySelector('.form')
  .addEventListener('submit', function(event) {

    controller.adiciona(event);
  });