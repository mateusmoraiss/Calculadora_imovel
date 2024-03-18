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
    preco *= 1.05; // Santa Maria, Gama e Samambaia (+5%)
  } else if (localizacao === 2) {
    preco *= 1.1; // Riacho Fundo (+10%)
  } else if (localizacao === 4) {
    preco *= 1.15; // Guará (+15%)
  } else if (localizacao === 5) {
    preco *= 10; // Lago Sul (10x mais caro)
  }
  
  // Exibir o resultado
  const resultadoEl = document.getElementById('resultado');
  resultadoEl.innerHTML = `O preço estimado do imóvel é de ${preco.toLocaleString('pt-BR')} R$.`;
}
