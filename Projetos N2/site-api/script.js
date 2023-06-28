window.addEventListener('DOMContentLoaded', function() {

  const apiKey = 'live_cabac4fb76ba295464163490b78291'; // api key responsável por autorizar a requisição de dados (USO LIMITADO!!!)

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}` // será usado no fetch para puxar os dados da API e colocar no site
};

  fetch('https://api.api-futebol.com.br/v1/campeonatos/10/fases/317', { headers }) // url da api, onde os dados estão armazenados
      .then(response => response.json())
      .then(data => {
          console.log(data);

          const tabela = data.tabela;
          const table = document.createElement('table');
          const thead = document.createElement('thead'); // criação dos atributos em html para a tabela, separando em "divs"
          const tbody = document.createElement('tbody');

          const headers = ['Posição', 'Time', 'Escudo', 'Pontos', 'Jogos', 'Vitórias']; // elementos do cabeçalho da tabela, demonstrando o que será mostrado

          const headerRow = document.createElement('tr');
          headers.forEach(header => {
              const th = document.createElement('th'); // criar os elementos onde os dados de cada time serão postos
              th.textContent = header;
              headerRow.appendChild(th);
          });

          thead.appendChild(headerRow);
          table.appendChild(thead);

          tabela.forEach(posicao => {
              const tr = document.createElement('tr');
              const { time, pontos, jogos, vitorias } = posicao;

              const posicaoTd = document.createElement('td');
              posicaoTd.textContent = posicao.posicao; // elemento posição, numerado de 1 a 20
              tr.appendChild(posicaoTd);

              const timeTd = document.createElement('td');
              const nomeTime = time.nome_popular || time.nome;
              timeTd.textContent = nomeTime; // elemento nome do time, identificando o time e sua respectiva posição
              tr.appendChild(timeTd);

              const escudoTd = document.createElement('td');
              const escudoImg = document.createElement('img');
              escudoImg.src = time.escudo; // elemento escudo do time (adicionando uma imagem armazenada na API)
              escudoImg.alt = nomeTime;
              escudoTd.appendChild(escudoImg);
              tr.appendChild(escudoTd);

              const pontosTd = document.createElement('td');
              pontosTd.textContent = pontos; // elemento pontos sendo adicionado a tabela
              tr.appendChild(pontosTd);

              const jogosTd = document.createElement('td');
              jogosTd.textContent = jogos; // elemento jogos sendo adicionado a tabela
              tr.appendChild(jogosTd);

              const vitoriasTd = document.createElement('td');
              vitoriasTd.textContent = vitorias; // elementos vitórias sendo adicionados a tabela
              tr.appendChild(vitoriasTd);

              tbody.appendChild(tr);
          });

          table.appendChild(tbody);
          document.getElementById('tabela').appendChild(table); // elemento na qual todos os dados serão alocados
      })
      .catch(error => {
          console.error('Ocorreu um erro:', error); // caso dê algum erro, será mostrado esta mensagem no log do site
      });
});
