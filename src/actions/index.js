import { api } from "../services/api";

export function searchImage(image) {
    return dispatch => {
        dispatch(searchImageStarted());

        api.get(`${image}`)
        .then(response => {
            dispatch(searchImageSuccess(response));
        })
        .catch(error => {
            dispatch(searchImageFailure(error.message));
        })
    }    
}

const searchImageStarted = () => ({
    type: 'SEARCH_IMAGE_STARTED'
})


const searchImageSuccess = (data) => ({
    type: 'SEARCH_IMAGE_SUCCESS',
    imagesData: data
})


const searchImageFailure = (error) => ({
    type: 'SEARCH_IMAGE_FAILURE',
    payload: {
        error
    }
})