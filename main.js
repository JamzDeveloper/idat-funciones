// const sumaNumero = require('./suma')
// const funcionFactorial = require('./factorial')
const funciones = require('./funciones');


const result = funciones.sumaNumero(5);
const resultFactorial = funciones.funcionFactorial(5);
// console.log(result);

console.log({
  suma: result,
  factorial: resultFactorial,
});
