import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories.js";

describe("Liking A Restaurant", () => {
  const initializeLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    initializeLikeButtonContainer();
  });

  it("should display the like button when the restaurant is not liked yet", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not like a restaurant again if it is already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant without an id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});

it("should not display the like button if the restaurant is already liked", async () => {
  await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

  expect(
    document.querySelector('[aria-label="like this restaurant"]'),
  ).toBeFalsy();
  expect(
    document.querySelector('[aria-label="unlike this restaurant"]'),
  ).toBeTruthy();

  await FavoriteRestaurantIdb.deleteRestaurant(1);
});
