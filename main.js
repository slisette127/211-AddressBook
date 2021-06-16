const addressBook = document.getElementById('userName');

const API = "https://randomuser.me/api/?results=25";

fetch(API)
.then((response) => response.json())
.then((data) => {
 
  data.results.forEach((person) => {
    
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = person.picture.thumbnail;
    img.alt = person.name.first;

    li.appendChild(img);

    const h4 = document.createElement("h4");
    h4.innerText = `${person.name.first} - ${person.name.last}`;
    

    li.innerText = `${person.name.first} - ${person.name.last}`;
    li.appendChild(h4);
       //append the li to the ul
    list.appendChild(li);
  });
    
  });






// fetch(https://randomuser.me/api/?format=csv)
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     // do something with 'data'
//   });