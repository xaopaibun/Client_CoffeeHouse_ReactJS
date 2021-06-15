import axios from 'axios';
import { useSelector } from 'react-redux';
import { Token, Url_Locahost } from '../config/Until';

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
      // 'Authorization': `bearer ${Token}`
    },
});



export const thanhtoan = (prams) => instance.post('/orderProduct', prams);

export const getdata = () => instance.get('/');

export const getsanphamtheoloai = (idLoai) => instance.get('/getcoffee_idloai/' + idLoai);


export const getCoffee = (id) => instance.get('/getCoffee/' + id);
export const updateCoffee = (id, prams) => instance.put('/update_coffee/'+id , prams);


// thao tác đăng ký, đăng nhập, đăng xuất web người dùng
export const dangkytk = (prams) => instance.post('/user/dangky', prams);
export const login = (prams) => instance.post('/user/login', prams);
export const logout = (prams) => instance.post('/user/logout', prams);


// dữ liệu trang chủ coffee house

export const get2NewsHome = () => instance.get('/getNewslimit');

//đặt bàn web người dùng
export const onBookingTableOnline = (prams) => instance.post('/BookingTableOnline',  prams);

// get data coffee theo loại ở web người dùng
export const getproductsloai = (prams) => instance.get('/getloai/'+ prams);
export const getloai = () => instance.get('/getloai');





//Admin quản trị

//quản trị chức năng booking table online
export const getBookingTableOnline = () => instance.get('/GetBookingTableOnline');
export const deleteBookingTableOnline = (prams) => instance.delete('/deleteBookingTableOnline/'+ prams);
export const updateBookingTableOnline = (prams) => instance.put('/updateBookingTableOnline/'+ prams);
export const cancelBookingTableOnline = (prams) => instance.put('/cancelBookingTableOnline/'+ prams);


//quản trị admin các chức năng khác
export const getOpenShop = () => instance.get('/OpenShop');
export const getImagesShop = () => instance.get('/ImagesShop');
export const getWeAreShopCoffee = () => instance.get('/WeAreShopCoffee');
export const getContentGioiThieuShop = () => instance.get('/ContentGioiThieuShop');
export const UpdateContentGioiThieuShop = (prams) => instance.put('/UpdateContentGioiThieuShop', prams);
export const UpdateImagesShop = (prams) => instance.put('/UpdateImagesShop', prams);

//login
export const loginAdmin =  (prams) => instance.post('/user/loginAdmin', prams);


//getdata theo page trang quản trị
export const getdatapage1 = () => instanceAdmin.get('/getdata/page=1');
export const getdatapage = (page) => instanceAdmin.get('/getdata/page=' +page);

//Get News quản lí tin tức
export const getNews = () => instance.get('/getNews');