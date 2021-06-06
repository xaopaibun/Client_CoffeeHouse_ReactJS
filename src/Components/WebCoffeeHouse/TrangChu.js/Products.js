import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { getproductsloai, getloai } from "../../../services/index";
import { useDispatch, useSelector} from 'react-redux'
import ProductItem from './ProductItem';
import {
    BrowserRouter as Router,
    Link,
    useParams
} from "react-router-dom";
const Products = () => {
    const [dulieu, setdulieu] = useState([]);
    const dispatch = useDispatch();
    const [loai, setloai] = useState([]);
    const _id = useSelector(state => state.HomeReduce._idLoai);
    const GetProduct = () => {
        getproductsloai(_id).then(function (response) {
            // dispatch({ type: "ALLSANPHAM", data: response.data })
            console.log(response.data)
            setdulieu(response.data);
        }).catch(function (error) {
            console.log(error);
        }).then(function () {
        });
    }

    const GetLoai = () => {
        getloai().then(function (response) {
            setloai(response.data);
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
        GetProduct();
        GetLoai();
    }, [_id]);
   
    return (
        <div>
            <section className="section_menu_today" style={{ backgroundImage: "url('https://bizweb.dktcdn.net/100/346/521/themes/818256/assets/bg_menutoday.jpg?1593508429561')" }}>
                <div className="container">
                    <div className="heading">
                        <h2 className="The_h2">MENU HÔM NAY </h2>
                        <p className="text-center">Xem Menu hôm nay</p>
                    </div>
                    <div className="tabs-content container">
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                            {
                                loai && loai.map((value) => {
                                   
                                    const onClickLoaiCoffee = () =>{
                                        dispatch({type : 'IDLOAI', _idLoai : value._id})
                                    }
                                    //const [isActive, setActive] = React.useState(false); onClick={() => setActive(!isActive)}
                                    return (
                                        <span className={_id === value._id ? 'Loai active' : 'Loai'} onClick= {() => onClickLoaiCoffee()} key={value._id}>{value.tenloai}</span>
                                    )
                                })
                            }
                        </div>
                        <div className="content-tab01">
                            {
                                dulieu && dulieu.map((value, index) => <ProductItem key={value._id.toString()} value={value}/>)
                            }
                        </div>
                    </div>
                    <div className="Nut_xem_them">
                        <div className="row">
                            <div className="col-lg-12 a-center">
                                <Link to="/AllSanPham" className="Xem_Them"> Xem Thêm <i className="fas fa-caret-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Products;