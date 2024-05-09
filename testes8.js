
/**
 * Encontre a porcentagem de tocos sadios e doentes baseado nos avaliados para cada posição dos arrays, 
 * essa porcentagem deve ser calculada apenas quando os avaliados forem igual a soma de sadios e doentes
 */
function calcularPorcentagemSadiosDoentesPorPosicao(objeto) {
    const avaliacoes = ['avaliacao1', 'avaliacao2', 'avaliacao3'];
    const resultados = {};
  
    avaliacoes.forEach(avaliacao => {
      const avaliados = objeto[avaliacao].tocosAvaliados;
      const doentes = objeto[avaliacao].tocosdoentes;
      const sadios = objeto[avaliacao].tocossadios;
  
      resultados[avaliacao] = [];
  
      for (let i = 0; i < avaliados.length; i++) {
        if (avaliados[i] === (doentes[i] + sadios[i])) {
          const porcentagemSadios = 0;
          const porcentagemDoentes = 0;
          resultados[avaliacao].push({ ponto: i, porcentagemSadios, porcentagemDoentes });
        }
      }
    });
  
    return resultados;
  }
  
  const porcentagensPorPosicao = calcularPorcentagemSadiosDoentesPorPosicao(Objeto);
  
  Object.keys(porcentagensPorPosicao).forEach(avaliacao => {
    console.log(`${avaliacao}:`);
    porcentagensPorPosicao[avaliacao].forEach(ponto => {
      console.log(`Ponto ${ponto.ponto}: ${ponto.porcentagemSadios}% sadios, ${ponto.porcentagemDoentes}% doentes`);
    });
  });
  