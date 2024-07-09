import restaurantList from '../views/pages/restaurant-list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': restaurantList, // default page
  '/restaurantList': restaurantList,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
