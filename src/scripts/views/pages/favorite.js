import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="restaurant-empty">Add your favorite restaurant</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }

    setTimeout(() => {
      const skeletonElements = restaurantsContainer.querySelectorAll('.skeleton');
      skeletonElements.forEach((element) => {
        element.classList.remove('skeleton');
      });
    }, 500);
  },
};

export default Favorite;
