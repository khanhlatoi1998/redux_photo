import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../photoSlide";

const rootReducer = {
    photos: photoReducer, 
};

const store = configureStore({
    reducer: rootReducer
});

export default store;