// Import stylesheets
import './style.css';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function RenderProducts(dataObject) {
  let template = ``;
  console.log(dataObject);
  for (let key in dataObject) {
    let prod = dataObject[key];
    template += `<div class="card">
    <h2>${prod.brand}</h2>
    <img src="${prod.images[0]}" width="120">
    <p>Description: <span>${prod.description}</span></p>
    <p>Price: <b>${prod.price} </b>$</p>
    
    </div>`;
  }
  return (appDiv.innerHTML += template);
}

let dataobj;
fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((response) => {
    dataobj = response.products;
  })
  .then(() => {
    //console.log(dataobj);
    RenderProducts(dataobj);
  });
