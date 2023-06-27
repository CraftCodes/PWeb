window.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table');
    const tbody = table.querySelector('tbody');
  
    const apiKey = 'live_cabac4fb76ba295464163490b78291';
    const url = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela';
  
    const requestOptions = {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    };
  
    fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API.');
    }
    return response.json();
  })
  .then(data => {
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
  });
  