function calcularPreco() {
    // Obter os valores do formulário
    const tamanho = parseFloat(document.getElementById('tamanho').value);
    const quartos = parseFloat(document.getElementById('quartos').value);
    const banheiros = parseFloat(document.getElementById('banheiros').value);
    const localizacao = parseInt(document.getElementById('localizacao').value);
    
    // Validar os valores
    if (isNaN(tamanho) || isNaN(quartos) || isNaN(banheiros) || isNaN(localizacao)) {
      alert('Por favor, preencha todos os campos com valores numéricos.');
      return;
    }
    
    // Calcular o preço baseado nos valores do formulário
    let preco = 100000;
    preco += tamanho * 1000;
    preco += quartos * 5000;
    preco += banheiros * 3000;
    if (localizacao === 1) {
      preco += 10000;
    } else if (localizacao === 2) {
      preco += 5000;
    } else {
      preco += 1000;
    }
    
    // Exibir o resultado
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = `O preço estimado do imóvel é de ${preco.toLocaleString('pt-BR')} R$.`;
  }
  