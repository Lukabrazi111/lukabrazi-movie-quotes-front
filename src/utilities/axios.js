import axios from 'axios';

const api = axios.create({
    baseURL: 'https://movie-quotes-api.lukabrazi.redberryinternship.ge/api/',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
});

export default api;
