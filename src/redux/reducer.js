/* eslint-disable import/no-named-as-default */
import { combineReducers } from "redux";

import dino404Slice from "./slices/dino404Slice";
import pixijiSlice from "./slices/pixijiSlice";

// We export the result of all the combined reducers
// to use it in createStore

export default combineReducers({
  pixiji: pixijiSlice,
  dino404: dino404Slice,
});

// Everything is combined in a new state
