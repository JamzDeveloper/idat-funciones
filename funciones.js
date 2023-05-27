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

module.exports = {
  funcionFactorial: funcionFactorial,
  sumaNumero: sumaNumero,
};


