

const products =  ["mesa", "silla", "teclado","salmon"];

products.push("camion", "pistola");

console.log(products);

//funcion normal
/*
products.forEach(function(product){
    console.log(product);
})*/

products.forEach(product =>{
    console.log(product);
})

for(const prod of products){
    console.log(prod);
}

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
    
}