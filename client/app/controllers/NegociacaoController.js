class NegociacaoController {

  constructor() {
    
    // realizando o bind, $ mantém document como seu contexto this
    let $ = document.querySelector.bind(document);

    // buscando os elementos
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }


  adiciona(event) {
    
    // cancelando a submissão do formulário
    event.preventDefault();

    let data = new Date(...this._inputData
      .value.split('-')
      .map(function(item, indice) {
        return item - indice % 2;
      })
    );
    console.log(data);
  
  }
}