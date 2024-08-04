import { configureStore } from "@reduxjs/toolkit";
import change from './reducers/change';

const store = configureStore({
    reducer: {
        state: change
    }
});

export default store;