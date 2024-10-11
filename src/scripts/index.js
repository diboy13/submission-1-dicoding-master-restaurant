import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
const data = require("../public/data/DATA.json");
const menu = require("../public/data/menu.json");

console.log(menu.menus);

const articles = document.querySelector(".articles");
const menus = document.querySelector(".menus");
const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  const header = document.querySelector("header");
  const toTop = document.querySelector(".to-top");
  const fixedNavbar = header.offsetTop;

  if (window.scrollY > fixedNavbar) {
    toTop.classList.add("active");
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("active");
  }
};

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navbar) {
    hamburger.classList.remove("hamburger-active");
    navbar.classList.remove("active");
  }
});

menu.menus.forEach((menu) => {
  menus.innerHTML += `
<div class="card-menu" tabindex="0">
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
    <article class="card-restaurant" tabindex="0">
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
