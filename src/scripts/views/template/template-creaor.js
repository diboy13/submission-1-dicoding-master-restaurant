import CONFIG from '../../globals/config';

const createRestaurantList = (restaurant) => `
    <article class="card-restaurant" tabindex="0" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <div class="article-wrapper">
        <figure>
          
          <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name
}" />
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
      <div>
        <a href="#/detail/${restaurant.id}">See more detail</a>
      </div>
    </article>
`;

const createFavoriteRestaurant = (restaurant) =>
  `
    <article class="card-restaurant" tabindex="0" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <div class="article-wrapper">
        <figure>

          <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name
}" />
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
      <div>
        <a href="#/detail/${restaurant.id}">See more detail</a>
      </div>
    </article>
`;
const createMenu = (menu) =>
  `
  <div class="card-menu" tabindex="0" data-aos="zoom-in" >
    <div class="card-image">
      <img src="${menu.img}" alt="${menu.name}" />
    </div>
    <div class="card-text">
      <h2 class="card-title">${menu.name}</h2>
      <p class="card-body">${menu.dsc}</p>
    </div>
    <div class="card-price">$${menu.price}</div>
  </div>
  `;

const createDetailRestaurant = (restaurant) =>
  `
        <div class="restaurant-detailed-wrapper">
          <figure>
            <img
              src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
              alt="${restaurant.name}"
            />
          </figure>
          <div class="detailed-body">
            <h2>${restaurant.name}</h2>
            <p>Address : ${restaurant.address}</p>
            <p>City : ${restaurant.city}</p>
            <p>
              Description: ${restaurant.description}
            </p>

            <div class="rating">
              <p>${restaurant.rating}</p>
            </div>

            <div class="like-button-container">
            </div>
          </div>
        </div>

             <div class="menu-container">
              <div>
                <p>Foods : ${restaurant.menus.foods
    .map((food) => {
      return food.name;
    })
    .join(', ')}</p>
              </div>
              <div>
                <p>Drinks : ${restaurant.menus.drinks
    .map((drink) => drink.name)
    .join(', ')}</p>
              </div>
            </div>

          <div>
          <h2 class="customer-tittle">Customer Review</h2>
             <div class="review-wrapper">
                ${restaurant.customerReviews
    .map((review) => {
      return `
                  <figure class="snip1533">
                    <figcaption>
                      <blockquote>
                        <p>${review.review}</p>
                      </blockquote>
                      <h3>${review.name}</h3>
                      <h4>${review.date}</h4>
                    </figcaption>
                  </figure>
                  `;
    })
    .join('')}
           </div>
          </div>
  `;

const createLikeButtonTemplate = () => `
<button class="button-8" id="likeButton">Add To Favorite</button>
`;

const createLikedButtonTemplate = () => `
<button class="button-8" id="likeButton">Remove From Favorite</button>
`;

export {
  createRestaurantList,
  createDetailRestaurant,
  createFavoriteRestaurant,
  createMenu,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
