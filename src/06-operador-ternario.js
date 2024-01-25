

const promedio = 5.9;

//se llama expresion ternaria, se utiliza para asignar valores en funcion si se cumplen o no determinadas situaciones
//se evalua el promedio. "?" si se cumple ":" si no se cumple
const status = ( promedio >= 5.5 ) ? "Aprobado" : "Rechazado"

console.log(`Resultado : ${status}`);

let max = 0;

const a = 5;
const b = 2;
const c = 1;

 max = a > b ? a : b;
 max = max > c ? a : c;

 console.log(max);
