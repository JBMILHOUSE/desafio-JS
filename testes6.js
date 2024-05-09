
/**
 * Encontre a porcentagem de tocos sadios e doentes 
 * baseado nos avaliados "(sadios / avaliados) * 100", "(doentes / avaliados) * 100". 
 */
function calcularPorcentagemSadiosDoentes(objeto) {
    const avaliacoes = ['avaliacao1', 'avaliacao2', 'avaliacao3'];
  
    const resultado = {};
  
    avaliacoes.forEach(avaliacao => {
      const tocosAvaliados = objeto[avaliacao].tocosAvaliados.length;
      const tocosSadios = objeto[avaliacao].tocossadios.reduce((acc, val) => acc + val, 0);
      const tocosDoentes = objeto[avaliacao].tocosdoentes.reduce((acc, val) => acc + val, 0);
  
      const porcentagemSadios = (tocosSadios / tocosAvaliados) * 100;
      const porcentagemDoentes = (tocosDoentes / tocosAvaliados) * 100;
  
      resultado[avaliacao] = {
        porcentagemSadios: isNaN(porcentagemSadios) ? 0 : porcentagemSadios.toFixed(2) + "%",
        porcentagemDoentes: isNaN(porcentagemDoentes) ? 0 : porcentagemDoentes.toFixed(2) + "%"
      };
    });
  
    return resultado;
  }
  
  const porcentagens = calcularPorcentagemSadiosDoentes(Objeto);
  
  Object.keys(porcentagens).forEach(avaliacao => {
    console.log(avaliacao + ":");
    console.log(`Porcentagem de tocos sadios: ${porcentagens[avaliacao].porcentagemSadios}`);
    console.log(`Porcentagem de tocos doentes: ${porcentagens[avaliacao].porcentagemDoentes}`);
  });
  