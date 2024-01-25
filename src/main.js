//si se pone un nombre en el parametro de la funcion lo usa como predeterminado
const sayHello = (name = "paco") =>`Hola mundo funcion ${name}`;
//las dos expresiones hacen lo mismo, solo que al ser de una sola linea se puede simplificar
const add = (a = 0, b = 0) => {
    return a+b}

console.log(add(10,5));