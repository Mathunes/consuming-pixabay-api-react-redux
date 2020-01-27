import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pixabay.com/api/?key=12264135-54d086077e5085f21d30d2762',
})