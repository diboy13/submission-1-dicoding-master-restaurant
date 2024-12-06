import API_ENPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log(error);
    }
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
