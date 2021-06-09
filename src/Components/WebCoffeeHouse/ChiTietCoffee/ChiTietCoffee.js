import { useDispatch, useSelector } from "react-redux";

import React, { useState } from 'react';
const ChiTietCoffee = () => {
    const dispatch = useDispatch();
    const [sl, setsl] = useState(1);
    const ItemCoffee = useSelector(state => state.HomeReduce.ItemCoffee)
    const addCart = (ItemCoffee) =>{
        dispatch({type: 'addcart', item : {_id : ItemCoffee._id, TenCoffee : ItemCoffee.TenCoffee , images : ItemCoffee.images[0], gia :ItemCoffee.gia , soluong : sl }})
       
    }

    const onTang = () =>{
        setsl(sl+1)
    }

    const onGiam = () =>{
        setsl(sl-1)
        sl > 2 ?  setsl(sl-1) : setsl(1)
    }
     return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-xl-6">
                        <img src={ItemCoffee?.images[0]} width="100%" height="100%" alt=""/>
                    </div>
                    <div className="col-xl-6">
                        <div className="title">
                            <h2 style={{ color: '#252525', fontSize: '28px', lineHeight: 'normal', margin: '0px', marginTop: '0px', marginBottom: '8px', fontWeight: 600 }}> {ItemCoffee?.TenCoffee} </h2>
                            <p style={{ fontSize: '28px', lineHeight: '28px', display: 'inline-block', color: '#e7b45a', fontWeight: 900 }}>{ItemCoffee?.gia} VNĐ </p>
                        </div>
                        <div className="status">
                            <p>Thương Hiệu: {ItemCoffee?.thuonghieu} </p>
                        </div>
                      
                            <div className="block_chonsp">
                                <div className="left">
                                    <button type="button" className="btn botron" id="giam" onClick={()=>onGiam()}>-</button>
                                    {/* <input type="text" className="form-control botron" name="" defaultValue={1} id="soluong" aria-describedby="helpId" placeholder /> */}
                                    <div className="botron text-center"><p>{sl}</p></div>
                                    <button type="button" className="btn botron" id="tang" onClick={()=>onTang()}>+</button>
                                </div>
                                <div className="right">
                                    <input type="submit" data-toggle="modal" data-target="#exampleModal" onClick ={() => addCart(ItemCoffee)} className="form-control btndathang" name id aria-describedby="helpId" placeholder value="Đặt Hàng" />
                                </div>
                            </div>
                        
                        <div className="thongtinsp">
                            <b>Thông tin:</b>
                            <p>{ItemCoffee?.thongtin} </p>
                        </div>
                    </div>
                    <div className="MoTaChiTietSanPham">
                        <h2 style={{ borderBottom: 'solid 1px #ebebeb', paddingBottom: '15px' }}>Mô tả sản phẩm | Đánh Gía </h2>
                        <p style={{ color: '#707070', fontStyle: '14px' }}>{ItemCoffee?.mota} </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ChiTietCoffee;