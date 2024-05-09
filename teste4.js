/**
 * Verificar a quantidade de posições em cada um dos arrays das avaliações:
 */

function verificarQuantidadePosicoes(objeto) {
    const avaliacoes = ['avaliacao1', 'avaliacao2', 'avaliacao3'];
  
    const resultado = {};
  
    avaliacoes.forEach(avaliacao => {
      resultado[avaliacao] = {};
  
      Object.keys(objeto[avaliacao]).forEach(chave => {
        resultado[avaliacao][chave] = objeto[avaliacao][chave].length;
      });
    });
  
    return resultado;
  }
  
  const quantidadePosicoes = verificarQuantidadePosicoes(Objeto);
  
  Object.keys(quantidadePosicoes).forEach(avaliacao => {
    console.log(avaliacao + ':');
    Object.keys(quantidadePosicoes[avaliacao]).forEach(chave => {
      console.log(`${chave}: ${quantidadePosicoes[avaliacao][chave]}`);
    });
  });
  