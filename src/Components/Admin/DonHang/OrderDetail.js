import { useSelector } from "react-redux";
import Menu from "../Home/Menu";
import axios from 'axios';
import React from 'react';
import { HandleTime } from "../../../config/Until";
import MenuBar from "../MenuBar";
const OrderDetail = () => {
    const orderProducts_iD = useSelector(state => state.OrderReduces?.orderProducts_iD);
    const onSubmit = (id) => {
        axios.put('http://localhost:5000/updatestatusorderProducts_iD/' + id)
            .then(function (response) {
                //dispatch({ type: 'SuaDuLieu',  dulieu_update: dulieu})
                alert("Cập nhật là đã xử lý thành công");

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
                        <p>Tổng giá tiền phải trả :(Chưa tính phí ship) <strong>{orderProducts_iD?.sumMoney}</strong></p>
                        <p>Trạng thái : <strong>{orderProducts_iD?.status === true ? "Đã xử lý" : "Đang xử lý"}</strong>{orderProducts_iD?.status === false ? <button type="button" onClick={() => onSubmit(orderProducts_iD._id)} class="btn btn-outline-primary">Đánh dấu là đã xử lý đơn hàng</button> : <button type="button" class="btn btn-outline-primary">Đánh dấu là đã hủy đơn hàng</button>}</p>
                        <p>Danh sách sản phẩm đã đặt hàng : </p>
                        <table class="table">
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
                                    orderProducts_iD.OrderProducts.map((val, index) => {
                                        return (
                                            <tr key={val._id}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{val.TenCoffee}</td>
                                                <td><img src={val.images} style={{ height: '100px', width: '100px' }} /></td>
                                                <td>{val.soluong}</td>
                                                <td>{val.gia}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OrderDetail;