import { createStore, combineReducers } from "redux";

import getMusicReducer from "./GetMusic/getMusic.reducer";

const rooteReducer = combineReducers({
    getMusic: getMusicReducer,
})

const store = createStore(rooteReducer);

export default store