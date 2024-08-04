const initial_state = false;

const change = (state = initial_state, action) => {
    switch (action.type) {
        case 'change': return !state;
        default: return state;
    }
}

export default change