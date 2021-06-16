import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { validateEmail } from '../../../config/Until';
import { login } from '../../../services';
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import jwt_decode from "jwt-decode";
const DangNhap = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [gmail, setgmail] = React.useState();
    const [error, seterror] = React.useState();
    const [password, setpassword] = React.useState();
    const isChangegmail = val => setgmail(val.target.value);
    const isChangepassword = val => setpassword(val.target.value);
    const onLogin = () => {
        if (!validateEmail(gmail)) {
            seterror('Gmail bạn nhập không đúng định dạng');
        }
        else if (!password) {
            seterror('Password không được để rỗng');
        }
        else {
            let dulieu = { gmail: gmail, password: password }
            login(dulieu).then(response => {
                dispatch({ type: "TOKEN-USER", Token: response.data.accessToken });
                history.push("/TrangChu");
                console.log(jwt_decode(response.data.accessToken).name);
                dispatch({type :"Name", name : jwt_decode(response.data.accessToken).name});

            }).catch(error => console.log(error))
            seterror('');
        }

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
                    <h1 >ĐĂNG NHẬP TÀI KHOẢN</h1>
                    <p>Bạn chưa có tài khoản, vui lòng đăng ký tại đây!</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 cangiua">
                            <p style={{ color: 'red' }}>{error}</p>
                            <div className="form-group">
                                <input type="email" onChange={value => isChangegmail(value)} className="form-control input" name="email" id aria-describedby="emailHelpId" placeholder="Nhập email" />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={value => isChangepassword(value)} className="form-control input" name="password" id placeholder="Nhập Mật Khẩu" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
                                    Ghi Nhớ Đăng Nhập
                                </label>
                            </div>
                            <p />
                            <input name="submit" id className="submit" onClick={() => onLogin()} type="submit" value="Đăng Nhập" />

                            <p className="text-center" style={{ color: '#707070', marginTop: '25px' }}>Bạn Chưa Có Tài Khoản thì đăng ký <a href="DangKy.php">tại đây</a></p>
                            <p className="text-center" style={{ color: '#252525', marginTop: '25px', marginBottom: '10px' }}>Hoặc đăng nhập bằng</p>
                            <div style={{ width: '270px', margin: 'auto', alignItems: 'center', height: '100px' }}>
                                <a className="social-login--facebook"><img width="129px" height="37px" alt="facebook-login-button" src="http://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" />   </a>
                                <a className="social-login--google" onclick="loginGoogle()"><img width="129px" height="37px" alt="google-login-button" src="http://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default DangNhap;
// <div className="bg-scroll">
//     <div className="cart-thead">
//         <div style={{ width: '18%' }} className="a-center">Hình ảnh</div>
//         <div style={{ width: '37%' }} className="a-center">Thông tin sản phẩm</div>
//         <div style={{ width: '17%' }} className="a-center">
//             <span className="nobr">Đơn giá</span>
//         </div>
//         <div style={{ width: '14%' }} className="a-center">Số lượng</div>
//         <div style={{ width: '14%' }} className="a-center">Thành tiền</div>
//         </div>
//         <div className="cart-tbody"><div className="item-cart productid-23679327">
//             <div style={{ width: '18%' }} className="image">
//                 <a className="product-image" title="Cà phê The Caipirinha" href="/ca-phe-the-caipirinha">
//                     <img width={75} height="auto" alt="Cà phê The Caipirinha" src="//bizweb.dktcdn.net/thumb/compact/100/346/521/products/13.jpg" /></a></div>
//                     <div style={{ width: '37%' }} className="a-center"

//                     ><h3 className="product-name"> <a className="text2line" href="/ca-phe-the-caipirinha" title="Cà phê The Caipirinha">Cà phê The Caipirinha</a> </h3><span className="variant-title" style={{ display: 'none' }}>Default Title</span><a className="remove-itemx remove-item-cart" title="Xóa" href="javascript:;" data-id={23679327}>Xóa</a></div><div style={{ width: '17%' }} className="a-center"><span className="item-price"> <span className="price">50.000₫</span></span></div><div style={{ width: '14%' }} className="a-center"><div className="input_qty_pr"><input className="variantID" type="hidden" name="variantId" defaultValue={23679327} /><input type="text" maxLength={3} readOnly min={0} className="check_number_here input-text number-sidebar input_pop input_pop qtyItem23679327" id="qtyItem23679327" name="Lines" size={4} defaultValue={1} /><button onclick="var result = document.getElementById('qtyItem23679327'); var qtyItem23679327 = result.value; if( !isNaN( qtyItem23679327 )) result.value++;return false;" className="increase_pop items-count btn-plus" type="button"><i className="fa fa-caret-up" /></button><button onclick="var result = document.getElementById('qtyItem23679327'); var qtyItem23679327 = result.value; if( !isNaN( qtyItem23679327 ) && qtyItem23679327 > 1 ) result.value--;return false;" disabled className="reduced_pop items-count btn-minus" type="button"><i className="fa fa-caret-down" /></button></div></div><div style={{ width: '14%' }} className="a-center"><span className="cart-price"> <span className="price">50.000₫</span> </span></div></div></div></div>
