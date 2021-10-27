const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

let placesToTravelFilter = [];

for (let i = 0; i < placesToTravel.length; i++) {

    

    if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 40) {
      placesToTravelFilter.push(placesToTravel[i]);
    }   
  
  
}

console.log(placesToTravelFilter);


//Metodo más sencillo aplicando un .filter()

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

const lugaresFiltrados = placesToTravel.filter( lugares => {
  return lugares.id !== 11 && lugares.id !== 40;
})

console.log(lugaresFiltrados);