
import axios from 'axios';
import React from 'react';

import Menu from '../Home/Menu';
import { useHistory } from "react-router-dom";
const SanPham = () => {
    const [dulieu, setdulieu] = React.useState([]);
    const history = useHistory();
    const [loai, setloai] = React.useState([]);
   
   
    React.useEffect(() => {
        axios.get('https://servercoffeehouse.herokuapp.com/')
            .then(function (response) {
                setdulieu(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    const Xoa = (id) => {
        axios.delete('https://servercoffeehouse.herokuapp.com/xoa/' + id).then(function (response) {
            console.log(response);
            setdulieu(dulieu.filter(item => item._id !== id));
        }).catch(function (error) {
            console.log(error);
        });
    }

    const DuLieuCoffee = () => {
        return (
            <table class="table table-hover" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Coffee</th>
                        <th style={{ width: '20px' }}>Loại Coffee</th>
                        <th style={{ width: '270px' }}>Mô Tả Sản Phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số Lượng</th>
                        <th>Gía Bán</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody id="body_table">
                    {
                        dulieu && dulieu.map((val, index) => {
                            return (
                                <tr key={val._id.toString()} style={{ height: '80px' }}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{val.TenCoffee}</td>
                                    <td>{val._idloai}</td>
                                    <td style={{ lineHeight: '36px', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>{val.mota}</td>
                                    <td><img width="100px" height="100px" src={val.images[0]} alt="" /></td>
                                    <td>{val.soluong}</td>
                                    <td>{val.gia} VNĐ</td>
                                    <td >
                                        <button type="button" className="btn btn-success" onClick={() => Xoa(val._id)}><i className="far fa-trash-alt"></i></button>
                                        <span> </span>
                                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modelId"><i className="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        );
    }
    return (
        <div>
            <Menu />
            <button type="button" onClick= {() => history.push('/Admin/SanPham/AddProduct')} class="btn btn-info btn-lg">Thêm dữ liệu</button>
            <DuLieuCoffee />   
        </div>
    );
}
export default SanPham;
