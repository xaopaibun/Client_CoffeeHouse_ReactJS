import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { validateEmail } from '../../../config/Until';
import { login } from '../../../services';
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [key, setkey] = React.useState();
    
    const onSearch = () =>{
        console.log(key)
    }
    return (
        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
            <div style={{ height: '50px' }}>

            </div>
            <div>
                <div className="content text-center">
                    <h1 >Tìm Kiếm Sản Phẩm</h1>
                </div>
                <div className="container" style={{height: '200px', marginTop: '50px'}} >
                    <div className="form-group">
                  
                      <input type="text"
                        className="form-control" onClick={(val) => setkey(val.target.value)}  aria-describedby="helpId" placeholder="Nhập từ khóa tìm kiếm" />
                      
                    </div>
                    <input  onClick={() => onSearch()}  className="submit" type="submit" value="Tìm kiếm" />
                
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Search;
