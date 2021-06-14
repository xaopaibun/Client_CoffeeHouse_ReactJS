import {
    BrowserRouter as Router,
    Link,
    useParams, useHistory
} from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { thanhtoan } from "../../../services";
const FormDienThongTin = () => {
    const [fullname, setfullname] = React.useState();
    const [phone, setphone] = React.useState();
    const [address, setaddress] = React.useState();
    const [gmail, setgmail] = React.useState();
    const [note, setnote] = React.useState();

    const history = useHistory();
    const OrderProducts = useSelector(state => state.HomeReduce.cart)

    const SumMoney = useSelector(state => state.HomeReduce.SumMoney)
    const dispatch = useDispatch();
    const onThanhToan = () => {
        let dulieu = { fullname: fullname, phone: phone, gmail: gmail, note: note, address: address, OrderProducts: OrderProducts, sumMoney: SumMoney };
        thanhtoan(dulieu).then(function (response) {
            alert('Đặt hàng thành công, thông tin chi tiết sẽ được gửi vào gmail của bạn');
            history.push('/TrangChu');
            dispatch({ type: 'ResetCart' })
            setfullname('');
            setphone('');
            setaddress('');
            setgmail('');
            setnote('');
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
            .then(function () {
                // always executed
            });
    }
    return (
        <div>


            <div class="row">
                <div class="col-xl-8">
                    <div className='container' style={{ padding: '40px' }}>
                        <h2> <Link to='/TrangChu' style={{ color: '#2a9dcc', fontSize: '40px', cursor: 'pointer' }}>Coffee House</Link></h2>
                        <div class="row">
                            <div class="col-xl-6">
                                <h5>Điền Thông Tin Mua Hàng</h5>
                                {/* <Link to = '/DangNhap'> <i class="fa fa-user-circle-o fa-lg"></i><span>Đăng Nhập</span></Link> */}
                                <div className="form-group">
                                    <label htmlFor>Nhập Họ Tên</label>
                                    <input type="text" className="form-control" onChange={(val) => setfullname(val.target.value)} name id="HoTen" aria-describedby="helpId" placeholder="Nhập Họ Tên" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Nhập Gmail</label>
                                    <input type="text" className="form-control" onChange={(val) => setgmail(val.target.value)} name id="SDT" aria-describedby="helpId" placeholder="Nhập Gmail" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Nhập Số Điện Thoai</label>
                                    <input type="text" className="form-control" onChange={(val) => setphone(val.target.value)} name id="SDT" aria-describedby="helpId" placeholder="Nhập Số Điện Thoai" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Nhập Địa Chỉ</label>
                                    <input type="text" className="form-control" onChange={(val) => setaddress(val.target.value)} name="DiaChi" id aria-describedby="helpId" placeholder="Nhập Địa Chỉ Chi Tiết" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Nhập Ghi Chú</label>
                                    <input type="text" className="form-control" onChange={(val) => setnote(val.target.value)} name="DiaChi" id aria-describedby="helpId" placeholder="Nhập Ghi Chú" />
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div>
                                    <h5>Vận Chuyển</h5>
                                    <div className="card-body">
                                        <div className="card">
                                            <h5 className="card-title">Giao hàng tận nơi 40.000 VNĐ</h5>
                                        </div>
                                    </div>
                                    <h5>Thanh Toán</h5>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Thanh toán khi giao hàng (COD)</h5>
                                            <p className="card-text">Bạn chỉ phải thanh toán khi nhận được hàng </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4" style={{ backgroundColor: '#fafafa', padding: '20px' }}>
                    <h3>Đơn hàng (4 sản phẩm)</h3>
                    
                    
                    <button type="button" onClick={() => onThanhToan()} class="btn btn-primary btn-lg">Đặt hàng</button>

                </div>
            </div>


        </div>

    );
}
export default FormDienThongTin;