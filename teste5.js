/*
  Retorna a soma de todos os arrays para cada uma das avaliações.
*/

function calcularSomaArrays(objeto) {
    const avaliacoes = ['avaliacao1', 'avaliacao2', 'avaliacao3'];
  
    const resultado = {};
  
    avaliacoes.forEach(avaliacao => {
      resultado[avaliacao] = {};
  
      Object.keys(objeto[avaliacao]).forEach(chave => {
        resultado[avaliacao][chave] = objeto[avaliacao][chave].reduce((acc, val) => acc + val, 0);
      });
    });
  
    return resultado;
  }
  
  const somaArrays = calcularSomaArrays(Objeto);
  
  Object.keys(somaArrays).forEach(avaliacao => {
    console.log(avaliacao + ':');
    Object.keys(somaArrays[avaliacao]).forEach(chave => {
      console.log(`${chave}: ${somaArrays[avaliacao][chave]}`);
    });
  });
  