import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const MenuBar = () => {
    return (
        <div style={{ height: '100%' }}>
            <div className="list-group" id="list-tab" role="tablist">
            <a className="list-group-item list-group-item-action "><Link className="nav-link" to='/Admin/Home'>Trang Chủ</Link></a>
                <a className="list-group-item list-group-item-action "><Link className="nav-link" to='/Admin/SanPham'>Quản lý Sản phẩm</Link></a>
                <a className="list-group-item list-group-item-action" ><Link className="nav-link" to='/Admin/LoaiSanPham'>Quản lý loại Sản phẩm</Link></a>
                <a className="list-group-item list-group-item-action"><Link className="nav-link" to="/Admin/DonHang">Quản lý đơn hàng</Link></a>
                <a className="list-group-item list-group-item-action" ><Link className="nav-link" to="/Admin/BookingTableOnline">Quản lý dịch vụ đặt bàn online</Link></a>
                <a className="list-group-item list-group-item-action" ><Link className="nav-link" to="/Admin/News">Quản lý tin tức</Link></a>
                <a className="list-group-item list-group-item-action" ><Link className="nav-link" to="/Admin/MenuQuanLyKhac">Quản lý chức năng khác</Link></a>
                <a className="list-group-item list-group-item-action"><Link className="nav-link" to="/Admin/User">Quản lý Người dùng</Link></a>
                <a className="list-group-item list-group-item-action"><Link className="nav-link" to="/Admin/DonHang">Báo cáo thống kê</Link></a>
          
            </div>


        </div>
    );
}
export default MenuBar;