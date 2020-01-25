const initialState = {
    image: ''
}

export const searchImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_IMAGE_STARTED':
            return {
                
            }
        case 'SEARCH_IMAGE_SUCCESS':
            return {
                
            }
        case 'SEARCH_IMAGE_FAILURE':
            return {
                
            }
        default:
            return state;
    }
}