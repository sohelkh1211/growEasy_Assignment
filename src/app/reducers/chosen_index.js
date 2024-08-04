const initial_index = 0;

const chosen_index = (state = initial_index, action) => {
    switch (action.type) {
        case 'update': return action.payload;
        default: return state;
    }
}

export default chosen_index;