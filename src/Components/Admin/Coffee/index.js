import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SanPham from "../Coffee/SanPham"
import MenuBar from "../MenuBar";

const QuanLyProduct = () => {
    const Token = useSelector(store => store.HomeReduce.Token);
    const history = useHistory();
    React.useEffect(() =>{
        if(!Token){
            history.push('/Admin/login')
        }
    }, [])
    return (
        <div>
           
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <SanPham/>
                </div>
            </div>
           

        </div>
    );
}
export default QuanLyProduct;