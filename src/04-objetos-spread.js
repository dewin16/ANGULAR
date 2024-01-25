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

//esto asigna a invoice2 el mismo espacio en la memoria que tiene invoice, de tal forma que si se modifica invoice se modifica invoice2
const invoice2 = invoice;
//los 3 puntos se llaman spread, y lo que hacen es clonar los objetos de invoice y se crea una nueva instancia que seria invoice 3
const invoice3 = { ... invoice};

//dos == comparan el contenido y 3 === comparan el tipo de dato
const result = invoice === invoice2;
console.log(result);

invoice.id = 20;
console.log(invoice2.id);
console.log(invoice3.id);