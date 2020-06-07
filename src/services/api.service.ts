import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'http://192.168.2.14:3333'
});

export default ApiService;