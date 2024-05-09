let Objeto = {
    usuario: 'test',
    fazenda: 'teste',
    bloco: 1,
    talhao: 25,
    area: 100.45,
    avaliacao1: {
      tocosAvaliados: [63, 42, 15, 78, 91, 34, 26, 55, 10, 97, 68, 7, 20, 50, 84, 19, 72, 3, 67],
      tocosdoentes: [19, 31, 11, 42, 35, 9, 4, 36, 1, 46, 36, 40, 2, 5, 18, 35, 10, 47, 2, 45],
      tocossadios: [44, 11, 4, 36, 55, 25, 22, 19, 9, 51, 25, 47, 5, 16, 32, 49, 9, 26, 1, 22]
    },
    avaliacao2: {
      tocosavaliados: [48, 21, 11, 72, 88, 40, 30, 60, 15, 93, 51, 75, 5, 18, 42, 77, 24, 65, 2, 55],
      tocodoentes: [29, 16, 10, 48, 63, 22, 19, 36, 7, 26, 62, 3, 7, 26, 52, 16, 44, 0, 28],
      tocossadios: [16, 5, 0, 24, 24, 25, 18, 11, 23, 8, 37, 25, 13, 3, 11, 16, 25, 8, 22, 2, 27]
    },
    avaliacao3: {
      tocosavaliados: [50, 35, 18, 80, 92, 38, 29, 65, 20, 100, 55, 82, 10, 25, 55, 90, 30, 70, 8, 62],
      tocodoentes: [25, 11, 5, 33, 50, 16, 10, 36, 9, 67, 31, 61, 5, 12, 30, 53, 9, 44, 2, 31],
      tocossadios: [26, 24, 13, 47, 42, 22, 19, 10, 33, 24, 21, 6, 13, 25, 37, 21, 26, 6, 30]
    }
  };
  
  /**
   * O Objeto abaixo está simulando uma avaliação de tocos da Cana-de-Acúçar,
   *  foram feitas 3 avaliações e cada uma dela tem 20 pontos avaliados, 
   * cada numero no array de tocos avaliados, doentes e saidos representa um ponto,
   *  por exemplo na avaliacao1 na posição 0 dos arrays foram avaliados 63 tocos 
   * onde 19 estavam doentes e 44 estavam sadios 
   */

  // Função para calcular a média de tocos doentes por avaliação
  function calcularMediaDoentes(avaliacao) {
    const totalDoentes = avaliacao.tocodoentes.reduce((acc, val) => acc + val, 0);
    return totalDoentes / avaliacao.tocosavaliados.length;
  }
  
  // Calculando média de tocos doentes para cada avaliação
  const mediaDoentesAvaliacao1 = calcularMediaDoentes(Objeto.avaliacao1);
  const mediaDoentesAvaliacao2 = calcularMediaDoentes(Objeto.avaliacao2);
  const mediaDoentesAvaliacao3 = calcularMediaDoentes(Objeto.avaliacao3);
  
  console.log("Média de tocos doentes na avaliação 1:", mediaDoentesAvaliacao1);
  console.log("Média de tocos doentes na avaliação 2:", mediaDoentesAvaliacao2);
  console.log("Média de tocos doentes na avaliação 3:", mediaDoentesAvaliacao3);
  