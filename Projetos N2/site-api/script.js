window.addEventListener('DOMContentLoaded', function() {

  const apiKey = 'live_088bd9a34bd6450d239d40d62f2832';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
};

  fetch('https://api.api-futebol.com.br/v1/campeonatos/10/fases/317', { headers })
      .then(response => response.json())
      .then(data => {
          console.log(data);

          const tabela = data.tabela;
          const table = document.createElement('table');
          const thead = document.createElement('thead');
          const tbody = document.createElement('tbody');

          const headers = ['Posição', 'Time', 'Escudo', 'Pontos', 'Jogos', 'Vitórias'];

          const headerRow = document.createElement('tr');
          headers.forEach(header => {
              const th = document.createElement('th');
              th.textContent = header;
              headerRow.appendChild(th);
          });

          thead.appendChild(headerRow);
          table.appendChild(thead);

          tabela.forEach(posicao => {
              const tr = document.createElement('tr');
              const { time, pontos, jogos, vitorias } = posicao;

              const posicaoTd = document.createElement('td');
              posicaoTd.textContent = posicao.posicao;
              tr.appendChild(posicaoTd);

              const timeTd = document.createElement('td');
              const nomeTime = time.nome_popular || time.nome;
              timeTd.textContent = nomeTime;
              tr.appendChild(timeTd);

              const escudoTd = document.createElement('td');
              const escudoImg = document.createElement('img');
              escudoImg.src = time.escudo;
              escudoImg.alt = nomeTime;
              escudoTd.appendChild(escudoImg);
              tr.appendChild(escudoTd);

              const pontosTd = document.createElement('td');
              pontosTd.textContent = pontos;
              tr.appendChild(pontosTd);

              const jogosTd = document.createElement('td');
              jogosTd.textContent = jogos;
              tr.appendChild(jogosTd);

              const vitoriasTd = document.createElement('td');
              vitoriasTd.textContent = vitorias;
              tr.appendChild(vitoriasTd);

              tbody.appendChild(tr);
          });

          table.appendChild(tbody);
          document.getElementById('tabela').appendChild(table);
      })
      .catch(error => {
          console.error('Erro:', error);
      });
});
