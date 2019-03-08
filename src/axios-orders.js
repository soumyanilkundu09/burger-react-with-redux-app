import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-10c0b.firebaseio.com/'
});

export default instance;