import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getdata } from '../../../services';
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import ProductItem from '../TrangChu.js/ProductItem';
const AllSanPham = () => {
    //const dulieu = useSelector(state => state.HomeReduce.dulieu)
    const [dulieu, setdulieu] = useState([]);
    const GetProduct = () => {
        getdata().then(function (response) {
            // dispatch({ type: "ALLSANPHAM", data: response.data })
            setdulieu(response.data);
        }).catch(function (error) {
            console.log(error);
        }).then(function () {
        });
    }
    React.useEffect(() => {
        GetProduct();
    }, []);
   
    return (
        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
            <div style={{ height: '50px' }} />
            <h2 class="The_h2 text-center"> TẤT CẢ SẢN PHẨM </h2>
            <div class="tabs-content container">
                <div className="content-tab01">
                    {
                        dulieu.map((value, index) => <ProductItem key={value._id.toString()} value={value} />)
                    }
                </div>
            </div>
            <div style={{ height: '150px' }} />
            <Footer />
        </div>
    );
}
export default AllSanPham;