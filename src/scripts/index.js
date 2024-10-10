import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
const data = require("../public/data/DATA.json");
const menu = require("../public/data/menu.json");

console.log(menu.menus);

const articles = document.querySelector(".articles");
const menus = document.querySelector(".menus");

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
});

menu.menus.forEach((menu) => {
  menus.innerHTML += `
<div class="card-menu">
    <div class="card-image">
      <img src="${menu.img}">
    </div>
    <div class="card-text">
      <h2 class="card-title">${menu.name}</h2>
      <p class="card-body">${menu.dsc}</p>
    </div>
    <div class="card-price">$${menu.price}</div>
  </div>
  `;
});

data.restaurants.forEach((restaurant) => {
  articles.innerHTML += `
    <article class="card-restaurant">
      <div class="article-wrapper">
        <figure>
          <img src="${restaurant.pictureId}" alt="" />
        </figure>
        <div class="article-body">
          <h2>${restaurant.name}</h2>
          <p>
           City : ${restaurant.city}
          </p>
          <p>
            Rating : ${restaurant.rating}
          </p>
        </div>
      </div>
    </article>
`;
});



console.log("Hello Coders! :)");
