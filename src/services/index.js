import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://servercoffeehouse.herokuapp.com',
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
});
export const getdata = () => instance.get('/');
export const getloai = () => instance.get('/getloai');
export const getCoffee = (id) => instance.get('/getCoffee/' + id);
export const dangkytk = (prams) => instance.post('/user/dangky', prams);
export const login = (prams) => instance.post('/user/login', prams);
export const logout = (prams) => instance.post('/user/logout', prams);