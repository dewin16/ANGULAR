

const user = {
    name: "pedro",
    correo: "pedropicapiedra@gmail.com",
    age: 15,
    ranking: 9,
}

//se colocan los atributos que queremos entre {} y depsues del = de donde queremos que los coja 
//esto se le conoce como desestructurar
const {name, ranking} = user;

//es la forma abreviada de desestructurar:
/*const name1 = user.name;
const ranking1 =user.ranking; */

console.log(`El nombre es : ${name1} y el ranking es ${ranking}`);