fetch('classificacao.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('resultado');
    const grupos = data.classificacao_por_grupo;

    for (const nomeGrupo in grupos) {
      const grupo = grupos[nomeGrupo];

      const tituloGrupo = document.createElement('h2');
      tituloGrupo.textContent = nomeGrupo;
      container.appendChild(tituloGrupo);

      const tabela = document.createElement('table');

      const header = document.createElement('tr');
      header.innerHTML = `
        <th>Posição</th>
        <th>Time</th>
        <th>Pontos</th>
        <th>Vitórias</th>
        <th>Empates</th>
        <th>Derrotas</th>
      `;
      tabela.appendChild(header);

      grupo.forEach(time => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${time.posicao}</td>
          <td>${time.time}</td>
          <td>${time.pontos}</td>
          <td>${time.vitorias}</td>
          <td>${time.empates}</td>
          <td>${time.derrotas}</td>
        `;
        tabela.appendChild(linha);
      });

      container.appendChild(tabela);
    }
  })
  .catch(erro => {
    console.error('Erro ao carregar os dados:', erro);
  });
