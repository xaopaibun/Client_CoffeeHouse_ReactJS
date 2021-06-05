import axios from 'axios';
import React from 'react';
import Menu from "../Home/Menu";
const DonHang = () => {
    const [DonHang, setDonHang] = React.useState([]);

    const GetDonHang = () => {
        axios.get('https://servercoffeehouse.herokuapp.com/getDonHang')
            .then(function (response) {
                setDonHang(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    React.useEffect(() => {
        GetDonHang();
    }, []);

    return (
        <div>
            <Menu />
            <div className='container'>
                

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Danh Sách Các Đơn Hàng</li>
                    </ol>
                </nav>

              
                <table class="table table-hover" >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody id="body_table">
                        {
                            DonHang && DonHang.map((val, index) => {
                                return (
                                    <tr key={val._id.toString()}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{val.ten}</td>
                                        <td>{val.sdt}</td>
                                        <td>{val.diachi}</td>
                                        <td >
                                            <button type="button" className="btn btn-success" >Xem Chi Tiết</button>
                                            <span> </span>
                                            <button type="button" className="btn btn-info">Xóa</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DonHang;