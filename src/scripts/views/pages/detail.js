import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../template/template-creaor';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="detail-container">
        <section class="detailed-restaurant">
        <div class="title-section">
          <h2>Detailed Restaurant</h2>
        </div>
        <div class="loader"></div>
        <div id="restaurant-detail"></div>

        </section>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const detailContainer = document.querySelector('#restaurant-detail');

    const loader = document.querySelector('.loader');
    const removeLoader = () => {
      loader.classList.add('hidden');
    };

    removeLoader();
    detailContainer.innerHTML = createDetailRestaurant(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.like-button-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
