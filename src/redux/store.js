import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts-reducer";

// const initialState = {
//   contacts: [],
//   filter: "",
// };

//Было
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development", //devtools будут только во время разработки
});
export default store;
