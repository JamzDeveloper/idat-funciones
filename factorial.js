
function funcionFactorial(numero) {
    // if(numero === 0 || numero==1){
    //     return 1
    // }else{
    //     return numero * funcionFactorial(numero-1);
    // }
  
    let resultado = 1;
  
    for (let i = 1; i <= numero; i++) {
      resultado = resultado * i;
    }
  
    return resultado; // -->120
  }

  
module.exports =funcionFactorial;