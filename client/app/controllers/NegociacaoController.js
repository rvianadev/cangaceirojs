class NegociacaoController {

  constructor() {
    
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView('#negociacoes');
    this._negociacoesView.update();
  }


  adiciona(event) {
    
    // cancelando a submissão do formulário
    event.preventDefault();

    // inclui a negociacao
    this._negociacoes.adiciona(this._criaNegociacao());

    // imprime a lista com o novo elemento
    this._limpaFormulario();
  }

  _limpaFormulario() {

    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _criaNegociacao() {

    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    ); 
  }
}