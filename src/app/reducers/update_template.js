import { ads } from '../utils';
const initial_ads = ads;

const update_template = (state = initial_ads, action) => {
    switch(action.type) {
        case 'update1': return action.payload;
        default: return state;
    }
}

export default update_template