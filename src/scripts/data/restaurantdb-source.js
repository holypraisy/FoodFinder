import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantDbSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      console.log('Fetching:', API_ENDPOINT.LIST);
      if (!response.ok) {
        console.error('Network response was not ok', response.status, response.statusText);
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Failed to fetch list of restaurants:', error);
      return [];
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      console.log('Fetching:', API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        console.error('Network response was not ok', response.status, response.statusText);
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error(`Failed to fetch detail for restaurant ID ${id}:`, error);
      return null;
    }
  }
}

export default RestaurantDbSource;
