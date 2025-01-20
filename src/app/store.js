import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import weatherReducer from "./weatherSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherReducer,
  },
})