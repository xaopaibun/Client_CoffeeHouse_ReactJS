import { useSelector } from "react-redux";
import Menu from "../Home/Menu";
import axios from 'axios';
import React from 'react';
import { FormatNumber, HandleTime, Url_Image, Url_Locahost } from "../../../config/Until";
import MenuBar from "../MenuBar";
import { useHistory } from "react-router-dom";
const OrderDetail = () => {
    const orderProducts_iD = useSelector(state => state.OrderReduces?.orderProducts_iD);
    const history = useHistory();
    const onSubmit = (id) => {
        axios.put(Url_Locahost + '/updatestatusorderProducts_iD/' + id, { status: 2 })
            .then(function (response) {
                alert("Cập nhật là đã xử lý thành công");
                history.push('/Admin');
                history.push('/Admin/DonHang');
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    const onCancel = (id) => {
        axios.put(Url_Locahost + '/updatestatusorderProducts_iD/' + id, { status: 3 })
            .then(function (response) {

                alert("Cập nhật là đã hủy đơn hàng thành công");
                history.push('/Admin');
                history.push('/Admin/DonHang');
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    return (
        <div>
            <div className="row">

                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <strong className="text-center" >Thông tin chi tiết đơn đặt hàng của bạn {orderProducts_iD?.fullname}</strong>
                        </nav>
                    </div>

                    <div className='container'>
                        <p>Họ Tên : <strong>{orderProducts_iD?.fullname}</strong></p>
                        <p>Phone : <strong>{orderProducts_iD?.phone}</strong></p>
                        <p>Điạ Chỉ :<strong>{orderProducts_iD?.address}</strong> </p>
                        <p>Gmail : <strong>{orderProducts_iD?.gmail}</strong></p>
                        <p>Thời gian đặt hàng :<strong> {HandleTime(orderProducts_iD?.date)}</strong></p>
                        <p>Ghi Chú : <strong>{orderProducts_iD?.note}</strong></p>
                        <p>Tổng giá tiền phải trả (Chưa tính phí ship) : <strong>{FormatNumber(orderProducts_iD?.sumMoney)} VNĐ</strong></p>
                        <p>Trạng thái : <strong> {orderProducts_iD?.status === 2 ? "Đã xử lý" : orderProducts_iD?.status === 1 ? "Đang xử lý" : "Đã hủy "}</strong>
                            {orderProducts_iD?.status == 1 ?
                                <div>
                                    <button type="button" onClick={() => onSubmit(orderProducts_iD._id)} className="btn btn-info"> Đánh dấu là đã xử lý đơn hàng</button>
                                    <button type="button"  className="btn btn-danger" onClick={() => onCancel(orderProducts_iD._id)}>Đánh dấu là đã hủy đơn hàng</button>
                                </div>
                                : orderProducts_iD?.status == 2 ?
                                    <button type="button" onClick={() => onCancel(orderProducts_iD._id)} className="btn btn-info">Đánh dấu là đã hủy đơn hàng</button>
                                    : <button type="button"  className="btn btn-success">Đơn hàng đã bị hủy thành công</button>}</p>
                        <p>Danh sách sản phẩm đã đặt hàng : </p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Số Lượng</th>
                                    <th>Gía</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderProducts_iD?.OrderProducts?.map((val, index) => {
                                        return (
                                            <tr key={val._id}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{val.TenCoffee}</td>
                                                <td><img src={ Url_Image + val.images} style={{ height: '100px', width: '100px' }} /></td>
                                                <td>{val.soluong}</td>
                                                <td>{val.gia}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        {/* <button type="button"  className="btn btn-success">Xuất Hóa Đơn Online</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderDetail;