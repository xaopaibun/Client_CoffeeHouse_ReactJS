import axios from 'axios';
import { useSelector } from 'react-redux';
import { Url_Locahost } from '../config/Until';
// const token = useSelector(store => store.AdminReduces.token);

const instance = axios.create({
    baseURL: Url_Locahost,
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
});

const instanceAdmin = axios.create({
  baseURL: Url_Locahost,
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
export const getsanphamtheoloai = (idLoai) => instance.get('/getcoffee_idloai/' + idLoai);
export const getCoffee = (id) => instance.get('/getCoffee/' + id);
export const dangkytk = (prams) => instance.post('/user/dangky', prams);
export const login = (prams) => instance.post('/user/login', prams);
export const logout = (prams) => instance.post('/user/logout', prams);
export const getproductsloai = (prams) => instance.get('/getloai/'+ prams);

export const onBookingTableOnline = (prams) => instance.post('/BookingTableOnline',  prams);
export const getBookingTableOnline = () => instance.get('/GetBookingTableOnline');
export const deleteBookingTableOnline = (prams) => instance.delete('/deleteBookingTableOnline/'+ prams);
export const updateBookingTableOnline = (prams) => instance.put('/updateBookingTableOnline/'+ prams);
export const cancelBookingTableOnline = (prams) => instance.put('/cancelBookingTableOnline/'+ prams);

export const getOpenShop = () => instance.get('/OpenShop');
export const getImagesShop = () => instance.get('/ImagesShop');
export const getWeAreShopCoffee = () => instance.get('/WeAreShopCoffee');
export const getContentGioiThieuShop = () => instance.get('/ContentGioiThieuShop');
export const UpdateContentGioiThieuShop = (prams) => instance.put('/UpdateContentGioiThieuShop', prams);
export const UpdateImagesShop = (prams) => instance.put('/UpdateImagesShop', prams);