import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useParams, useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { getloai, logout } from '../../services';
const MenuCoffeeHouse = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.HomeReduce.cart.length)
    const history = useHistory();
    const dataUser = useSelector(state => state.HomeReduce.dataUser)
    const token = useSelector(state => state.HomeReduce.refreshToken)
    const keyMenu = useSelector(state => state.HomeReduce.keyMenu)
    const [loai, setloai] = React.useState([]);
    const name = useSelector(state => state.HomeReduce.name)
    React.useEffect(() => {
        getloai().then(function (response) {
            setloai(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);

    const onLogout = () =>{
        logout({token : token}).then(response =>  {
            dispatch({type:"Logout" });
            // console.log(response.data)
            alert('Bạn đã đăng xuất thành công');
            history.push("/TrangChu");
        } ).catch( error => console.log(error))
    }

    const onActiveMenu = (key) =>{
        dispatch({type:"ActiveMenu", keyMenu : key})
    }

    return (
        <div>
            <div className="container">
                <div className="header_top">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="welcome_text">Chào mừng bạn đến với Coffee House !</p>
                        </div>
                        <div className="col-lg-6">

                            {
                                name  ? <ul className="ul_taikhoan"><p style={{color: '#636363'}}>Tài Khoản bạn <Link to="/Account" style={{color: 'green' , fontWeight:'bold'}}>{name}</Link> / <Link to ="/TrangChu" onClick={() =>onLogout()}>Thoát</Link></p></ul> :
                                    <ul className="ul_taikhoan">
                                        <li className="ul_taikhoan_li"><Link to="/DangNhap">Đăng Nhập</Link></li>
                                        <span>/</span>
                                        <li className="ul_taikhoan_li"><Link to="/DangKy">Đăng Ký</Link></li>
                                    </ul>
                            }

                        </div>
                    </div>
                    <div className="mid-header wow animate__zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="container">
                            <nav className="header_nav">
                                <ul className="header_nav_left">
                                    <li className="nav_item"><Link to="/TrangChu" style={{color: keyMenu === 'Trang Chủ' ? '#e7b45a': ''}} onClick = {() => onActiveMenu('Trang Chủ')}>Trang Chủ</Link></li>
                                    <li className="nav_item"><Link to = '/GioiThieu' style={{color: keyMenu === 'Giới Thiệu' ? '#e7b45a': ''}} onClick = {() => onActiveMenu('Giới Thiệu')}>Giới Thiệu</Link></li>
                                    <li className="nav_item sp">
                                        <Link to="/AllSanPham" style={{color: keyMenu === 'Sản Phẩm' ? '#e7b45a': ''}} onClick = {() => onActiveMenu('Sản Phẩm')}>Sản Phẩm <i className="fa fa-caret-down" /></Link>
                                        <ul className="nav_item_sanpham text-center">
                                            {loai.map((val, index) => (<li key={val._id.toString()}><Link to={"/idLoai="+val._id}>{val.tenloai}</Link></li>))}
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="logo_center">
                                    <li><a href><img src="https://bizweb.dktcdn.net/100/346/521/themes/818256/assets/logo.png?1619594503248" alt="" /></a></li>
                                </ul>
                                <ul className="header_nav_right">
                                    <li className="nav_item"><a href="" style={{color: keyMenu === 'Tin Tức' ? '#e7b45a': ''}} onClick = {() => onActiveMenu('Tin Tức')}>Dịch Vụ</a></li>
                                    <li className="nav_item"><a href="" style={{color: keyMenu === 'Tin Tức' ? '#e7b45a': ''}} onClick = {() => onActiveMenu('Tin Tức')}>Tin Tức</a></li>
                                    <li className="nav_item"><a href=""style={{color: keyMenu === 'Liên Hệ' ? '#e7b45a': ''}}   onClick = {() => onActiveMenu('Liên Hệ')}>Liên Hệ</a></li>
                                </ul>
                                <ul className="GioHang flex text-right">
                                    <li className="nav_icon search">
                                        {/* <i className="fas fa-search" /> */}
                                        {/* <form action="TimKiem.php" method="post">
                                            <div className="query_search"> */}
                                                {/* <input name="keyword" type="text" placeholder="Tìm Kiếm" /> */}
                                                <Link to ='/Search'><i className="fas fa-search" /></Link>
                                            {/* </div>
                                        </form> */}
                                    </li>
                                    <li className="nav_icon"><Link to='/Cart'><i className="fa fa-shopping-bag" style={{ color: '#e7b45a' }} /><div style={{ borderRadius: '50%', width: '15px', height: '15px', backgroundColor: 'white', position: 'absolute', top: 0, right: 0, zIndex: 1, textAlign: 'center', fontWeight: 900, fontSize: '10px', color: '#252525' }}>{cart}</div></Link></li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default MenuCoffeeHouse;