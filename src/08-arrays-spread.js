

const products =  ["mesa", "silla", "teclado","salmon"];

products.push("camion", "pistola");

const frutas = ["manzanas","platanos","sandias"];

//se puede utilizar el spread tambien para arrays
const mercado = [... frutas, ... products];

console.log(mercado);

