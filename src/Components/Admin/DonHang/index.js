import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { HandleTime, Url_Locahost } from '../../../config/Until';
import Menu from "../Home/Menu";
import MenuBar from '../MenuBar';
const DonHang = () => {
    const [DonHang, setDonHang] = React.useState([]);
    const [Page, setPage] = React.useState();
    const dispatch = useDispatch();
    const history = useHistory();

    const Token = useSelector(store => store.HomeReduce.Token);
    const GetDonHang = () => {
        axios.get(Url_Locahost + '/getorderProduct')
            .then(function (response) {
                setDonHang(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const GetPage = () => {
        axios.get(Url_Locahost + '/getPageOrderProducts')
            .then(function (response) {
                setPage(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    React.useEffect(() => {
        if (!Token) {
            history.push('/Admin/login')
        }
        else {
            GetDonHang();
        }
    }, []);


    const deleteOderProducts = (id) => {
        axios.delete(Url_Locahost + '/deleteorderProducts_iD/' + id)
            .then(function (response) {
                // DonHang.filter((val) => val._id !== id)
                setDonHang(DonHang.filter(item => item._id !== id))
              
                alert('Xóa thành công');
             
            })
            .catch(function (error) {

                console.log(error);
            }
            )
    }

    const getorderProducts_iD = (id) => {
        axios.get(Url_Locahost + '/getorderProducts_iD/' + id)
            .then(function (response) {
                dispatch({ type: 'getorderProducts_iD', getorderProducts_iD: response.data[0] })
                history.push('/Admin/DonHang/OrderDetail');

            })
            .catch(function (error) {

                console.log(error);
            })

    }
    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <div className='container'>
                        <nav className="navbar navbar-light bg-light">
                            <div className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </div>
                        </nav>
                        <table class="table table-hover" >
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ Tên</th>
                                    <th>Phone</th>
                                    <th>Gmail</th>
                                    <th>Địa Chỉ</th>
                                    <th>Thời gian</th>
                                    <th>Tình Trạng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody id="body_table">
                                {
                                    DonHang && DonHang.map((val, index) => {
                                        return (
                                            <tr key={val._id.toString()}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{val.fullname}</td>
                                                <td>{val.phone}</td>
                                                <td>{val.gmail}</td>
                                                <td>{val.address}</td>
                                                <td>{HandleTime(val.date)}</td>
                                                <td>{val.status == 2 ? 'Đã xử lý đơn hàng' : val.status == 1 ? 'Chưa xử lý' : 'Đã Hủy'}</td>
                                                <td style={{ width: '140px' }}>
                                                    <button type="button" className="btn btn-success" onClick={() => getorderProducts_iD(val._id)} >Xem</button>
                                                    <span> </span>
                                                    <button type="button" className="btn btn-info" onClick={() => deleteOderProducts(val._id)}>Xóa</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <Menu /> */}

        </div>
    );
}
export default DonHang;