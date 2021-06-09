import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const MenuBar = () => {
    return (
        <div style={{ backgroundColor: "black", height: '100%' }}>
            <div class="alert alert-success" role="alert">
                <strong>Quản trị admin</strong>
            </div>
            <nav class="nav flex-column">
                <Link className="nav-link" to='/Admin/SanPham'>Danh sách Sản phẩm</Link>
                <Link className="nav-link" to="/Admin/LoaiCoffee">Loại Sản Phẩm</Link>
                <Link className="nav-link" to="/Admin/NCC">Nhà Cung Cấp</Link>
                <Link className="nav-link" to="/Admin/NCC">Đơn Đặt Bàn</Link>
                <Link className="nav-link" to="/Admin/DonHang">Danh sách các đơn đặt hàng</Link>
                <Link className="nav-link" to="/Admin/MenuQuanLyKhac">Danh sách quản lý khác</Link>
            </nav>
            {/* <ul className="navbar-nav text-center">
                <li className="nav-item">
                    <Link className="nav-link" to='/Admin/SanPham'>Danh sách Sản phẩm</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Admin/LoaiCoffee">Loại Sản Phẩm</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Admin/NCC">Nhà Cung Cấp</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đơn Đặt Bàn</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Admin/DonHang">Danh sách các đơn đặt hàng</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Báo cáo, thống kê</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đăng xuất</a>
                </li>
            </ul> */}

        </div>
    );
}
export default MenuBar;