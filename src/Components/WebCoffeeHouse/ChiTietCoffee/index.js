import React, { useState } from 'react';
import ChiTietCoffee from "./ChiTietCoffee";
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import { useDispatch, useSelector } from 'react-redux'
import { getCoffee } from "../../../services/index";
import ls  from "local-storage";
import {
    BrowserRouter as Router,

    useParams
} from "react-router-dom";
import ModalCart from '../Modals/ModalCart';
const Coffee = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    
    React.useEffect(() => {
 
        getCoffee(id).then(function (response) {
            dispatch({ type: "ChiTietCoffee", data: response.data })
        }).catch(function (error) {
            console.log(error);
        })
    }, [id]);
    return (
        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
          
            <ChiTietCoffee />
            <ModalCart/>
            <Footer />
        </div>
    );
}
export default Coffee;