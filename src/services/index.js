import axios from 'axios';
import { useSelector } from 'react-redux';
// const token = useSelector(store => store.AdminReduces.token);

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
});

const instanceAdmin = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 15000,
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `bearer ${ANC}`
    },
});




export const thanhtoan = (prams) => instance.post('/orderProduct', prams);
export const loginAdmin =  (prams) => instance.post('/user/loginAdmin', prams);
export const getdata = () => instance.get('/');
export const getloai = () => instance.get('/getloai');
export const getCoffee = (id) => instance.get('/getCoffee/' + id);
export const dangkytk = (prams) => instance.post('/user/dangky', prams);
export const login = (prams) => instance.post('/user/login', prams);
export const logout = (prams) => instance.post('/user/logout', prams);
export const getproductsloai = (prams) => instance.get('/getloai/'+ prams);
export const onBookingTableOnline = (prams) => instance.post('/BookingTableOnline',  prams);
