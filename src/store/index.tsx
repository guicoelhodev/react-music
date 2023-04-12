import { createStore, combineReducers } from "redux";

import getMusicReducer from "./GetMusic/getMusic.reducer";
import getUserReducer from "./InfoUser/infoUser.reducer";
import favoriteMusicReducer from "./FavoriteMusic/favoriteMusic.reducer";

const rooteReducer = combineReducers({
  getMusic: getMusicReducer,
  getUser: getUserReducer,
  getFavoriteMusic: favoriteMusicReducer,
});

const store = createStore(rooteReducer);

export default store;
