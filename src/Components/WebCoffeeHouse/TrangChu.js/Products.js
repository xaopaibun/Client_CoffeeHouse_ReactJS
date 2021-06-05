import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { getdata, getloai } from "../../../services/index";
import { useDispatch} from 'react-redux'
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
    const GetProduct = () => {
        getdata().then(function (response) {
            dispatch({ type: "ALLSANPHAM", data: response.data })
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
    }, []);
    
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
                                    //const [isActive, setActive] = React.useState(false); onClick={() => setActive(!isActive)}
                                    return (
                                        <a className={"Loai"} key={value._id.toString()}>{value.tenloai}</a>
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
                            <div className="col-lg-12  a-center">
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