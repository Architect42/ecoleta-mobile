import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'http://localhost:3333'
});

export default ApiService;