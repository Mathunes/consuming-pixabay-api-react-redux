const initialState = {
    loading: false,
    images: '',
    error: null,
    found: false
}

export const searchImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_IMAGE_STARTED':
            return {
                loading: true,
            }
        case 'SEARCH_IMAGE_SUCCESS':
            return {
                images: action.imagesData,
                loading: false,
                error: null,
                found: true      
            }
        case 'SEARCH_IMAGE_FAILURE':
            return {
                images: action.imagesData,
                loading: false,
                error: action.payload.error,
                found: false
            }
        default:
            return state;
    }
}