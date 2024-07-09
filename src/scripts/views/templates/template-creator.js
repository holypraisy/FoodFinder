import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
      <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
      <div class= "info_container" tabindex="0">
        <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL.replace('<pictureId>', restaurant.pictureId)}" alt="${restaurant.name}" />
        <div class="restaurant__info" tabindex="0">
          <h3>Informasi</h3>
          <h4>Alamat</h4>
          <p>${restaurant.address}</p>
          <h4>Kota</h4>
          <p>${restaurant.city}</p>
          <h4>Rating</h4>
          <p>⭐️${restaurant.rating}</p>
        </div>
     </div>
    <div class="restaurant__overview" tabindex="0">
      <h3>Deskripsi</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__menus" tabindex="0">
      <h3>Menu</h3>
      <div class= "menus_container">
        <div class="restaurant__menus__foods" tabindex="0">
          <h4>Makanan</h4>
          <ul>
            ${(restaurant.menus?.foods || []).map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="restaurant__menus__drinks" tabindex="0">
          <h4>Minuman</h4>
          <ul>
            ${(restaurant.menus?.drinks || []).map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>

    </div>
    <div class="restaurant__reviews" tabindex="0">
      <h3>Ulasan Pelanggan</h3>
        <div class="review_container">
        ${(restaurant.customerReviews || []).map((review) => `
          <div class="review">
            <h4>${review.name}</h4>
            <h5>${review.review}</h5>
            <p><small>${review.date}</small></p>
          </div>
        `).join('')}
        </div>
      </div>
    </div>

  `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item" tabindex="0">
      <div class="restaurant-item__header skeleton" tabindex="0" >
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
             src="${CONFIG.BASE_IMAGE_URL.replace('<pictureId>', restaurant.pictureId)}" loading="lazy">
        <div class="restaurant-item__header__rating"tabindex="0">
          <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
      </div>
      <div class="restaurant-item__content" >
        <h3 class= "restaurant__title skeleton"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p tabindex="0">City : ${restaurant.city}</p>
      </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
