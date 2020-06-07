import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'http://192.168.2.5:3333'
});

export default ApiService;