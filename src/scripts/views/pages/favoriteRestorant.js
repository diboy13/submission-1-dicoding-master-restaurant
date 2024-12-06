import { createFavoriteRestaurant } from '../template/template-creaor';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const FavoriteRestaurant = {
  async render() {
    return `
          <a  tabindex="1" class="skip-link-favorite">Menuju ke konten</a>
      <section class="favorite" id="favorite">
        <div tabindex="0" class="title-section">
          <h2>Favorite Restaurant</h2>
        </div>
        <div class="loader"></div>
        <div class="articles" id="favorite-restaurant"></div>
      </section>             
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteRestaurant = document.querySelector('#favorite-restaurant');
    const loader = document.querySelector('.loader');
    const skipToContentFavorite = document.querySelector('.skip-link-favorite');

    skipToContentFavorite.addEventListener('keypress', () => {
      document.querySelector('#favorite-restaurant').scrollIntoView({ behavior: 'smooth' });
      skipToContentFavorite.blur();
    });
    const removeLoader = () => {
      loader.classList.add('hidden');
    };

    restaurants.forEach((restaurant) => {
      removeLoader();
      favoriteRestaurant.innerHTML += createFavoriteRestaurant(restaurant);
    });
  },
};

export default FavoriteRestaurant;
