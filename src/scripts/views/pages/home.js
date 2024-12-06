import { createMenu } from '../template/template-creaor';
import menus from '../../../public/data/menu';

const Home = {
  async render() {
    return `
      <!-- Hero section start -->
      <a tabindex="1" class="skip-link-main">Menuju ke konten</a>
      <section class="hero" id="hero">

        <div>
          <h1 tabindex="0" data-aos="fade-down" data-aos-duration="3000">
            Enjoy The Beautiful Art of Taste
          </h1>
        </div>
      </section>
      <!-- Hero section end -->

      <!-- menu section start -->
      <section class="menu" id="maincontent">
        <div tabindex="0" class="title-section">
          <h2>Our Menu</h2>
        </div>
        <div class="menu-restaurant"></div>
      </section>

      <!-- menu section end -->
      `;
  },

  async afterRender() {
    const menuRestaurant = document.querySelector('.menu-restaurant');
    const skipToContentMain = document.querySelector('.skip-link-main');
    skipToContentMain.addEventListener('keypress', () => {
      document.querySelector('#maincontent').scrollIntoView({ behavior: 'smooth' });
      skipToContentMain.blur();
    });

    menus.forEach((menu) => {
      menuRestaurant.innerHTML += createMenu(menu);
    });
  },
};

export default Home;
