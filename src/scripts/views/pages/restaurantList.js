import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantList } from '../template/template-creaor';

const RestaurantList = {
  async render() {
    return `
      <a  tabindex="1" class="skip-link-list">Menuju ke konten</a>
      <section class="restaurant-list" id="restaurant-list">
        <div tabindex="0" class="title-section">
          <h2>Our Recomendation Restaurant</h2>
        </div>
        <div class="loader"></div>
        <div class="articles" id="restaurantList"></div>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurantList');
    const loader = document.querySelector('.loader');
    const skipToContentList = document.querySelector('.skip-link-list');

    skipToContentList.addEventListener('keypress', () => {
      document.querySelector('#restaurantList').scrollIntoView({ behavior: 'smooth' });
      skipToContentList.blur();
    });

    const removeLoader = () => {
      loader.classList.add('hidden');
    };

    restaurants.forEach((restaurant) => {
      removeLoader();
      restaurantContainer.innerHTML += createRestaurantList(restaurant);
    });
  },
};

export default RestaurantList;
