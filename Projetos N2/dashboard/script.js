const apiKey = 'live_cabac4fb76ba295464163490b78291';
const url = 'https://api.api-futebol.com.br/v1/campeonatos/10/fases/317';

const table = document.getElementById('table');
const tbody = table.querySelector('tbody');

fetch(url, {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    if (data && data.tabela) {
      data.tabela.forEach((equipe) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${equipe.posicao}</td>
                         <td>${equipe.time.nome_popular}</td>
                         <td>${equipe.pontos}</td>`;
        tbody.appendChild(row);
      });
    } else {
      console.error('Dados inválidos retornados pela API.');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os dados da API:', error);
  });