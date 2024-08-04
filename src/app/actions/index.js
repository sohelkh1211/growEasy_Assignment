export const setIsOpen = () => {
    return {
        type: 'change',
    }
}

export const setIndex = (new_index) => {
    return {
        type: 'update',
        payload: new_index,
    }
}


// index determines particular object inside ads array which is going to be updated. // E.g :- index = 0,1,2,3,4,5
// key determines which metada inside that particular object needs to be updated. E.g :- title, description, images, button etc.
// value determines updated value.
export const setAds = (new_state) => {
    return {
        type: 'update1',
        payload: new_state,
    }
}