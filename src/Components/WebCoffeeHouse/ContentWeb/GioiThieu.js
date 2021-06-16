import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getContentGioiThieuShop, login } from '../../../services';
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
const GioiThieu = () => {
    const [content, setcontent] = React.useState();

    React.useEffect(() => {
        getContentGioiThieuShop().then(response => {
            setcontent(response.data[0].content);
        }).catch(error => console.log(error))
    })

    return (

        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
            <div style={{ height: '50px' }}>
            </div>
            <div>
                <h1>Giới Thiệu</h1>
                <div style={{height: 'auto', width: '80%', margin: 'auto', marginBottom: '100px', marginTop: '50px'}} dangerouslySetInnerHTML={{ __html: content }}>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default GioiThieu;
