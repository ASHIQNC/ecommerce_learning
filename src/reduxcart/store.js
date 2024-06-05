// import { configureStore } from "@reduxjs/toolkit";
// import cartslice from "./cartslice";
// import wishListSlice from "./wishListSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartslice,
//     wishList: wishListSlice,
//   },
// });

// export default store;

//using persist
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishListSlice from "./wishListSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartslice,
  wishList: wishListSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
