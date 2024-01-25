//las llaves indican que es un objeto
const invoice = {
    id:10,
    nombre: "Compras",
    date: new Date(),
    cliente: {
        id: 2,
        name: "Yokito",
        lastName: "Lacaca",
        age: 20
    },
    items: [
        {
            producto:"keyboard",
            precio:320,
            cantidad: 2,
        },
        {
            producto: "mouse",
            precio: 21,
            cantidad: 5
        },
        {
            producto: "papel",
            precio: 15,
            cantidad: 50
        },
    ],
    total: function(){
        let total = 0;

        this.items.forEach(item => {
            total = total + item.precio * item.cantidad;
        })
        return total;
    },
    greeting: function(){
        return `Hola ${this.cliente.name}`
    }

};
//se puede utilizar "?" para marcar un optional chaining
//se utiliza cuando consumes apis y te falta un dato
//por ejemplo factura no tiene un atributo company, si se intenta imprimir a continaucion marca undefined
console.log(invoice.company);
//si se intenta acceder al nombre de un atributo que no esta definido, marcara un error fatal
//console.log(invoice.company.name);

//para evitarlo se utiliza "?"
console.log(invoice.company?.name);

//esto seria el equivalente a 
if(invoice.company != undefined && invoice.comapny.name){
    console.log("Existe");
}else{
    console.log("no existe");
}
