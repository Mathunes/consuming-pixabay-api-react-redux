import { api } from "../services/api";
import axios from 'axios';

export function openImage(imageInfo) {
    return ({
        type: 'OPEN_IMAGE',
        imageInfo
    });
}

export function searchImage(image) {
    return dispatch => {
        dispatch(searchImageStarted());

        axios
            .get(`https://pixabay.com/api/?key=12264135-54d086077e5085f21d30d2762&q=${image}`)
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