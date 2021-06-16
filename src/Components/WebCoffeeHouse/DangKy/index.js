import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import { dangkytk } from '../../../services';
import { isValidName, validateEmail, validatePhone } from '../../../config/Until';
const DangKy = () => {
    const history = useHistory();
    const [name, setname] = React.useState();
    const [gmail, setgmail] = React.useState();
    const [error, seterror] = React.useState();
    const [password, setpassword] = React.useState('');
    const [phone, setphone] = React.useState();
    const isChangename = val => setname(val.target.value);
    const isChangegmail = val => setgmail(val.target.value);
    const isChangepassword = val => setpassword(val.target.value);
    const isChangephone = val => setphone(val.target.value);
   
    const onSubmit = () =>{
        if(!validateEmail(gmail)){
            seterror('Gmail bạn nhập không đúng định dạng');
        }
        else if(!name ){
            seterror('Name không được để trống');
        }
        else if(!isValidName(name)){
            seterror('Name không được xử dụng ký tự đặc biệt hoặc chứa số');
        }
        else if(password.length < 6){
            seterror('Mật khẩu ít nhất 6 ký tự');
        }
        else if(!validatePhone(phone)){
            seterror('Số điện thoại không đúng định dạng');
        }
        else{
            seterror('');
         
            let dulieu = {name : name, gmail : gmail, password : password, phone : phone}
            dangkytk(dulieu).then(response =>  {
                alert(response.data)
                history.push("/DangNhap");
            } ).catch( error =>  alert('Bạn thử lại sau, Lỗi gì đó'))
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
                    <h1 >ĐĂNG KÝ TÀI KHOẢN</h1>
                    <p>Đăng ký ngay tài khoản để nhận được những ưu đãi hấp dẫn khi mua hàng</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 cangiua">
                                <p style={{color: 'red'}}>{error}</p>
                                <div className="form-group">
                                    <input type="text" onChange={value =>isChangename(value)} className="form-control input" name="txtHoTen" id placeholder="Nhập Họ Tên" />
                                </div>
                                <div className="form-group">
                                    <input type="email"  onChange={value =>isChangegmail(value)} className="form-control input" name="txtEmail" id placeholder="Nhập email" />
                                </div>
                                <div className="form-group">
                                    <input type="text"   onChange={value =>  isChangephone(value)} className="form-control input" name="txtSDT" id placeholder="Nhập Số Điện Thoại" />
                                </div>
                                <div className="form-group">
                                    <input type="password"  onChange={value =>isChangepassword(value)} className="form-control input" name="txtMatKhau" id placeholder="Nhập Mật Khẩu" />
                                </div>
                                <input name="btnDangKy" id="btnDangKy" onClick={() => onSubmit()} className="submit" type="submit" value="Đăng ký tài khoản" />
                         
                            <p className="text-center" style={{color: '#252525', marginTop: '25px', marginBottom: '10px'}}>Hoặc đăng nhập bằng</p>
                            <div style={{width: '270px', margin: 'auto', alignItems: 'center', height: '100px'}}>
                                <a  className="social-login--facebook"><img width="129px" height="37px" alt="facebook-login-button" src="http://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" />   </a>   
                                <a  className="social-login--google" onclick="loginGoogle()"><img width="129px" height="37px" alt="google-login-button" src="http://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default DangKy;