function sumaNumero(numero) {
    let resultado = 0;
  
    // for(let i=1;i<=numero; i++){
  
    //     resultado = resultado+i;
    // }
  
    let i = 1;
  
    while (i <= numero) {
      resultado = resultado + i;
      // i =i+1;
      i++;
      // i+=1
      
      //si es primo -> sumar
  
    }
    return resultado;
  }

module.exports=sumaNumero
