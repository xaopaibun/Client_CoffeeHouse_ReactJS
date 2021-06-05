import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
const ProductItem = ({ value }) => (<div className="content-tab01-item" >
    <div className="img_sp">
        <img className="img_sp" src={value.images[0]} alt="" />
    </div>
    <div className="tieude_sp">
        <h3 className="name_product"><Link to={"/_idCoffee="+ value._id}>{value.TenCoffee}</Link></h3>
        <p className="TT_SP" style={{ overflow: 'hidden' }}>
            {value.mota}
        </p>
    </div>
    <div className="gia_sp text-right">
        <span className="Gia_SP">{value.gia}</span>
    </div>
</div>)
export default ProductItem;