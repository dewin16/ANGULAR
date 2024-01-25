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
    total: 500,
    greeting: function(){
        return `Hola ${this.cliente.name}`
    }

};
//se anida el objeto cliente con {} a invoice y a continiacion se muestr como modificarlo
invoice.cliente.name= "Yolamo"
console.log(invoice);

const saludar = invoice.greeting();
console.log(saludar);