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
//se anida el objeto cliente con {} a invoice y a continiacion se muestr como modificarlo
//invoice.cliente.name= "Yolamo"
console.log(invoice);


const saludar = invoice.greeting();
console.log(saludar);

console.log(`Total ${invoice.total()}`);