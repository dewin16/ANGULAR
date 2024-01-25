//si se pone un nombre en el parametro de la funcion lo usa como predeterminado
//en este caso paco seria el nombre determinado si no se define abajo juan
function sayHello(name = "paco"){

    const saludo = `Hola mundo funcion ${name}`;
    //console.log("Hola mundo funcion");

    return saludo;
}
//const result = sayHello();
//console.log(result);

//tambien se puede imprimir directamente la ejecucion dela funcion
console.log(sayHello("juan"));