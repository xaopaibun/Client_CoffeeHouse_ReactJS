import axios from 'axios';
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Menu = () => {
    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-column">
            <a className="navbar-brand" href="#">Quản trị Admin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/Admin/SanPham'>Danh sách Sản phẩm</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"to="/Admin/LoaiCoffee">Loại Sản Phẩm</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Admin/NCC">Nhà Cung Cấp</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Đơn Đặt Bàn</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Admin/MenuQuanLyKhac">Danh sách quản lý khác</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/Admin/DonHang">Danh sách các đơn đặt hàng</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Báo cáo, thống kê</a>
                    </li>
                </ul>
            </div>
        </nav>
        {/* <div style={{backgroundImage: 'url("https://lh3.googleusercontent.com/proxy/FFC9vgvLc9In0ehAQmQ16E6fwOa0d-SH2paQv0_1mYWYd0O_IXa82DF1gn3Sv6RYzifyvgF6_KtFuxIzbfnV2hFdR2ZgpYjhEiIiuHlsBMGur-bntnM")', width: '100%', height: '600px',backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
         
        </div> */}
        </div>
    );
}
export default Menu;