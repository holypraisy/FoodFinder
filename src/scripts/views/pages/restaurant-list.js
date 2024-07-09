import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const ListRestaurants = {
  async render() {
    return `
    <div class="hero-section">
    <picture>
    <source media="(max-width: 768px)" srcset="heros/hero-image_2-small.jpg">
    <source media="(min-width: 769px)" srcset="heros/hero-image_2-large.jpg">
    <img src="../public/heros/hero-image_2.jpg" alt="Hero Image" class="hero__image" width="1920" height="1080">
    </picture>
    </div>

    <div class="content">
        <h2 class="content__heading" tabindex="0">- Explore Restaurants -</h2>
        <div id="restaurants" class="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.getElementById('restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;
