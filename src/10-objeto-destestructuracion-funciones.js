

const user = {
    name: "pedro",
    correo: "pedropicapiedra@gmail.com",
    age: 15,
    ranking: 9,
}

const detail = ({name, correo}) =>{
    console.log(`El detalle del usuario ${name} es ${correo}`);
}

detail(user);

