const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

let sinGato = [];

for (let nombres of toys) {
    if (!nombres.name.includes("gato")) {
        sinGato.push(nombres)
    }
}

console.log(sinGato);