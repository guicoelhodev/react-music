import axios from 'axios';

const API_KEY = "REDACTED";

const api = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000, 
    headers: {'x-rapidapi-key': API_KEY}

});

export default api

