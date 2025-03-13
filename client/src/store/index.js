import { configureStore } from "@reduxjs/toolkit";
import prodReducer from './prodRoute';

const store=configureStore({
    reducer:{
        prod:prodReducer,
    },
});

export default store;