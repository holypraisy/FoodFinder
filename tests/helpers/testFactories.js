import LikeButtonInitiator from "../../src/scripts/utils/fav-button-initiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
