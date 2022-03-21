import axios from 'axios';

const api = axios.create({
    baseURL: 'https://movie-quotes-api.lukabrazi.redberryinternship.ge/api/',
    withCredentials: true,
});

export default api;
