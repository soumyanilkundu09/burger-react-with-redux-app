import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-burger-abe55.firebaseio.com/'
});

export default instance;