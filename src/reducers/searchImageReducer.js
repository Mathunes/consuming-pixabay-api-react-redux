const initialState = {
    image: ''
}

export const searchImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_IMAGE_STARTED':
        case 'SEARCH_IMAGE_SUCCESS':
        case 'SEARCH_IMAGE_FAILURE':
        default:
            return state;
    }
}