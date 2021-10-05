const getInfo = async () => {
    let all=[]
    for (let i = 1; i <= 10; i++) {
        const url = await (await fetch(`https://swapi.dev/api/people/${i}/`)).json();
        const homeworld = await (await fetch(url.homeworld)).json()
        let obj = {
            name: url.name,
            height: url.height,
            hair_color: url.hair_color,
            planet: {
                homeWorld: homeworld.name,
                population: homeworld.population
            }
        }
       all.push(obj);
}
console.log(all)
createTable(all)
}

getInfo()

// const createTable=async () =>{
//     const table=document.createElement('tr');
//     starWare.append(table);
//     for(let j=0;j<10;j++){
//         const tr=document.createElement('tr');
//         for(let i=0;i<5;i++){
//         const td=document.createElement('td');
//         td.innerHTML="data"+i;
//     }
//     }
// }

function createTable(warriors) {

    let table =
        `<table style="width:100%">
  <tr>
    <th>name</th>
    <th>hair</th>
    <th>height</th>
    <th>planet name</th>
    <th>planet population</th>
  </tr>`
    for (let warrior of warriors) {
        table +=
            `<tr class="oddTr">
   <td>${warrior.name}</td>
   <td>${warrior.hair_color}</td>
   <td>${warrior.height}</td>
   <td>${warrior.planet.homeWorld}</td>
   <td>${warrior.planet.population}</td>
   </tr>`

    }
    table += '</table>'
    document.body.innerHTML = table;
}

