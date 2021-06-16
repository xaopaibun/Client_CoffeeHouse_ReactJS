import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MenuCoffeeHouse from "../Menu";

const Account = () => {
    const TokenUser = useSelector(state => state.HomeReduce.TokenUser)
    const history = useHistory();
    React.useEffect(() => {
        if (!TokenUser) {
            history.push('/DangNhap')
        }
    }, [])
    return (
        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
            <div style={{ height: '30px' }}>

            </div>
            <div className="container">
                <h1>Thông tin tài khoản</h1>
                <p><i>Xin Chào,</i><strong> Qúy</strong></p>
                <div className="row">
                    <div className="col-xl-9">
                        <table className="table">
                            <thead style={{ backgroundColor: '#e7b45a', color: 'white' }}>
                                <tr>
                                    <th>Đơn Hàng</th>
                                    <th>Ngày</th>
                                    <th>Địa chỉ</th>
                                    <th>Giá trị đơn hàng</th>
                                    <th>TT thanh toán</th>
                                    <th>TT vận chuyển</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                    <td ></td>
                                    <td></td>
                                    <td></td> */}

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-3">
                        <h4>Thông tin khách hàng</h4>
                        <p><i className="fa fa-user icont_user"></i> Qúy</p>
                        <p>Đơn hàng : 0</p>
                        <p>Chi tiêu : 0</p>
                        <a className="btn btndiachi">
                            <span style={{ color: 'white' }}>Sổ địa chỉ (0)</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Account;