//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let i = 0; i < alumns.length; i++) {
    let contador = 0;
    if (alumns[i].T1 === true) {
        contador++;
    } 
    if (alumns[i].T2 === true) {
        contador++;
    }
    if (alumns[i].T3 === true) {
        contador++;
    }
    if (contador >= 2) {
        alumns[i].isAppoved = true;
    }
    if (contador < 2) {
        alumns[i].isAppoved = false;
    }
    
};

console.log(alumns);