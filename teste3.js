/**
 * Verifique e os campos Usuario, Fazenda, Bloco, Talhao, Area estão preenchidos e com o tipo correto.
 */
function verificarCampos(objeto) {
    const campos = ['usuario', 'fazenda', 'bloco', 'talhao', 'area'];
  
    const resultado = campos.map(campo => {
      const preenchido = typeof objeto[campo] !== 'undefined' && objeto[campo] !== null && objeto[campo] !== '';
      const tipoCorreto = typeof objeto[campo] === 'number';
  
      return {
        campo,
        preenchido,
        tipo: tipoCorreto ? 'Numeric' : typeof objeto[campo]
      };
    });
  
    return resultado;
  }
  
  const resultadoVerificacao = verificarCampos(Objeto);
  
  resultadoVerificacao.forEach(item => {
    console.log(`${item.campo}:`);
    console.log(`Preenchido: ${item.preenchido}`);
    console.log(`Tipo do campo: "${item.tipo}"`);
  });
  