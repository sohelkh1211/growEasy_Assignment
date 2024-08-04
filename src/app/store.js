import { configureStore } from "@reduxjs/toolkit";
import change from './reducers/change';
import chosen_index from './reducers/chosen_index';
import update_template from './reducers/update_template';

const store = configureStore({
    reducer: {
        toggle: change, // toggle to show dialogue
        template: chosen_index, 
        update_template: update_template,
    }
});

export default store;