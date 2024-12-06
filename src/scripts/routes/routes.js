import RestaurantList from '../views/pages/restaurantList';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import FavoriteRestaurant from '../views/pages/favoriteRestorant';

const routes = {
  '/': Home,
  '/restaurant-list': RestaurantList,
  '/detail/:id': Detail,
  '/favorite-restaurant': FavoriteRestaurant,
};

export default routes;
