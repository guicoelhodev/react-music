import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const api = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000, 
    headers: {'x-rapidapi-key': API_KEY}

});

export default api
