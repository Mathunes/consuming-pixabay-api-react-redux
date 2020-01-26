const initialState = {
    imageInfo: {}
}

export const openImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_IMAGE':
            return ({
                imageInfo: action.imageInfo
            });
        default:
            return state;
    }
}