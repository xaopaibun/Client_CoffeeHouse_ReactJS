import SanPham from "./Coffee/SanPham"
import MenuBar from "./MenuBar";
import LoaiCoffee from "../Admin/LoaiCoffee";
const QuanTri = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <SanPham/>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-2">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Trang chủ</a>
                        <a className="list-group-item list-group-item-action " id="list-products-list" data-toggle="list" href="#list-products" role="tab" aria-controls="home">Danh sách Sản phẩm</a>
                        <a className="list-group-item list-group-item-action" id="list-typeproducts-list" data-toggle="list" href="#list-typeproducts" role="tab" aria-controls="profile">Loại Sản phẩm</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Đơn Đặt Bàn</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Quản lý đơn hàng</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Quản lý tin tức</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Quản lý website nhỏ lẻ</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Báo cáo thông kê</a>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"></div>
                        <div className="tab-pane fade" id="list-products" role="tabpanel" aria-labelledby="list-products-list"><SanPham/></div>
                        <div className="tab-pane fade" id="list-typeproducts" role="tabpanel" aria-labelledby="list-typeproducts-list"><LoaiCoffee /></div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                </div>
            </div> */}

        </div>
    );
}
export default QuanTri;