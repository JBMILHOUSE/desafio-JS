
let Objeto = {
  Usuario: 'test',
  Fazenda: 'teste',
  Bloco: 1,
  Talhao: 25,
  Area: 100.45,
  Avaliacao1: {
    tocosAvaliados: [63, 42, 15, 78, 91, 34, 26, 55, 10, 97, 68, 7, 20, 50, 84, 19, 72, 3, 67],
    tocosDoentes: [19, 31, 11, 42, 35, 9, 4, 36, 1, 46, 36, 40, 2, 5, 18, 35, 10, 47, 2, 45],
    tocosSadios: [44, 11, 4, 36, 55, 25, 22, 19, 9, 51, 25, 47, 5, 16, 32, 49, 9, 26, 1, 22]
  },
  Avaliacao2: {
    tocosAvaliados: [48, 21, 11, 72, 88, 40, 30, 60, 15, 93, 51, 75, 5, 18, 42, 77, 24, 65, 2, 55],
    tocosDoentes: [29, 16, 10, 48, 63, 22, 19, 36, 7, 26, 62, 3, 7, 26, 52, 16, 44, 0, 28],
    tocosSadios: [16, 5, 0, 24, 24, 25, 18, 11, 23, 8, 37, 25, 13, 3, 11, 16, 25, 8, 22, 2, 27]
  },
  Avaliacao3: {
    tocosAvaliados: [50, 35, 18, 80, 92, 38, 29, 65, 20, 100, 55, 82, 10, 25, 55, 90, 30, 70, 8, 62],
    tocosDoentes: [25, 11, 5, 33, 50, 16, 10, 36, 9, 67, 31, 61, 5, 12, 30, 53, 9, 44, 2, 31],
    tocosSadios: [26, 24, 13, 47, 42, 22, 19, 10, 33, 24, 21, 6, 13, 25, 37, 21, 26, 6, 30]
  }
};
/**
 * Encontre a porcentagem de tocos sadios e doentes baseado nos avaliados para cada posição dos arrays, 
 * essa porcentagem deve ser calculada apenas quando os avaliados forem igual a soma de sadios e doentes
 */
function calcularPorcentagemSadiosDoentesPorPosicao(objeto) {
    const avaliacoes = ['Avaliacao1', 'Avaliacao2', 'Avaliacao3'];
    const resultados = {};
  
    avaliacoes.forEach(avaliacao => {
      const avaliados = objeto[avaliacao].tocosAvaliados;
      const doentes = objeto[avaliacao].tocosDoentes;
      const sadios = objeto[avaliacao].tocosSadios;
  
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
  