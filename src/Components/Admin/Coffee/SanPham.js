
import axios from 'axios';
import React from 'react';

import Menu from '../Home/Menu';
import { useHistory , Link} from "react-router-dom";
import { FormatNumber, Url_Image } from '../../../config/Until';
import { useDispatch } from 'react-redux';
import { getdatapage , getdatapage1} from '../../../services';
const SanPham = () => {
    const [dulieu, setdulieu] = React.useState([]);
    const history = useHistory();
    const [page, setpage] = React.useState();
    const GetCoffee = (e, val) => {
        e.preventDefault();
        getdatapage(val)
            .then(function (response) {
                setdulieu(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    React.useEffect(() => {
        getdatapage1()
            .then(function (response) {
                setdulieu(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://localhost:5000/getpage')
            .then(function (response) {
                setpage(response.data.pagelength);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    const Xoa = (id) => {
        axios.delete('https://servercoffeehouse.herokuapp.com/xoa/' + id).then(function (response) {
            setdulieu(dulieu.filter(item => item._id !== id));
        }).catch(function (error) {
            console.log(error);
        });
    }

    let items = [];

    for (let number = 1; number <= page; number++) {
        items.push(number);
    }
   
   

    const DuLieuCoffee = () => {
        return (
            <div className="table-responsive">
                <table class="table table-hover" >
                    <thead className='text-center'>
                        <tr>
                            <th style={{width: '30px'}}>STT</th>
                            <th style={{width: '60px'}}>Tên Coffee</th>
                            <th style={{ width: '20px' }}>Loại Coffee</th>
                            <th style={{ width: '270px' }}>Mô Tả Sản Phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số Lượng</th>
                            <th>Gía Bán</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody id="body_table" className='text-center'>
                        {
                            dulieu && dulieu?.map((val, index) => {
                                return (
                                    <tr key={val._id.toString()} style={{ height: '80px' }} >
                                        <td  scope="row">{index + 1}</td>
                                        <td >{val.TenCoffee}</td>
                                        <td>{val._idloai}</td>
                                        <td style={{ lineHeight: '38px', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}  dangerouslySetInnerHTML={{ __html: val.mota}} ></td>
                                        <td><img width="100px" height="100px" src={ Url_Image + val.images} alt={'Cà Phê ' +  val.TenCoffee} /></td>
                                        <td>{val.soluong}</td>
                                        <td>{FormatNumber(val.gia)} VNĐ</td>
                                        <td>
                                            <button type="button" className="btn btn-success" onClick={() => Xoa(val._id)}><i className="far fa-trash-alt"></i></button>
                                            <span> </span>
                                            <Link to={'/Admin/SanPham/EditProduct/' + val._id}><button type="button" className="btn btn-info" data-toggle="modal" data-target="#modelId" ><i className="fas fa-edit"></i></button></Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                 
                    <nav aria-label="Trang">
                        <ul className="pagination pagination-lg">
                          
                            {
                                items.map(val => (<li className="page-item"><a className="page-link" onClick={(e) => GetCoffee(e, val)} href="#">{val}</a> </li>))
                            }

                        </ul>
                    </nav>
                </table>
            </div>

        );
    }

    const NavBar = () => {
        const [Key, setKey] = React.useState();
        const Search = () => {
            axios.post('http://localhost:5000/findToCoffee', { TenCoffee: Key })
                .then(function (response) {
                    console.log('abc', response);
                    //setdulieu()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        return (
            <nav className="navbar justify-content-between">
               <button type="button" onClick={() => history.push('/Admin/SanPham/AddProduct')} className="btn btn-info btn-lg">Thêm dữ liệu</button>
                <div className="form-inline">
                    <input className="form-control mr-sm-2" onChange={(val) => setKey(val.target.value)} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => Search()}>Search</button>
                </div>
            </nav>
        );
    }
    return (
        <div>
            <NavBar />
            <DuLieuCoffee />
        </div>
    );
}
export default SanPham;
