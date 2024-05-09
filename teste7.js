/**
 * Encontre nas avaliações em quais posições do array o numero de tocos avaliados é menor ou maior que a soma de tocos doentes e sadios.
    Exemplo de caso, na posição 0 dos arrays da Avaliacao3 temos 50 avaliados 25 doentes e 26 sadios, logo a soma de doentes e sadios é 51 maior que os 50 avaliados.
        retorno Avaliacao 3: Doentes + Sadios maior que avaliados: 0 "0 representa a posição dos arrays"
 */

function encontrarPosicoesAvaliadas(objeto) {
    const avaliacoes = ['avaliacao1', 'avaliacao2', 'avaliacao3'];
    const resultados = {};
  
    avaliacoes.forEach(avaliacao => {
      const avaliados = objeto[avaliacao].tocosAvaliados;
      const doentes = objeto[avaliacao].tocosdoentes;
      const sadios = objeto[avaliacao].tocossadios;
  
      resultados[avaliacao] = [];
  
      for (let i = 0; i < avaliados.length; i++) {
        const somaDoentesSadios = doentes[i] + sadios[i];
        if (avaliados[i] < somaDoentesSadios) {
          resultados[avaliacao].push(i);
        }
      }
    });
  
    return resultados;
  }
  
  const posicoesAvaliadas = encontrarPosicoesAvaliadas(Objeto);
  
  Object.keys(posicoesAvaliadas).forEach(avaliacao => {
    console.log(`${avaliacao}:`);
    if (posicoesAvaliadas[avaliacao].length === 0) {
      console.log("Nenhuma posição encontrada onde o número de tocos avaliados é menor ou igual à soma de tocos doentes e sadios.");
    } else {
      console.log(`Posições onde o número de tocos avaliados é menor ou igual à soma de tocos doentes e sadios: ${posicoesAvaliadas[avaliacao].join(", ")}`);
    }
  });
  