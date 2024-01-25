
//let es una variable que puede cambiar
let name = 'pedro';
name = "andres";

//const son valores inmutables
const lastName = "Picapiedra";
const condicion = true;

if(condicion){
    const lastName = "Chiquilicuatre";
    console.log(lastName);
}
//se puede utilizar comillas invertidas ` para concatenar
console.log("Hola mundo" + " " + name+ " " + lastName );
//esto devuelve "Hola mundo name lastname"
console.log(`Hola mundo name lastName `);
//para que devuelva la informacion que contiene la variable se utiliza ${} que permite insertar un valor dinamico
console.log(`Hola mundo ${name} ${lastName} `);


