import React, { useState } from 'react';
import '../../../assets/CSS/Fromlogin.css';
import { loginAdmin } from '../../../services';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const dispatch = useDispatch();
    const onLogin = () => {
        let admin = { gmail: username, password: password }
        loginAdmin(admin).then(res => {
            dispatch({ type: 'TOKEN', Token: res.data.accessToken })
            localStorage.setItem('Token', res.data.accessToken)
            alert('login thanh cong')
            history.push('/Admin/Home');

        }).catch(err =>  alert('login that bai', err));
    }
    return (
        <div>
            <div className="login-panel">
                <h2 className="login-title">
                    Coffee House <span className="light">App</span>
                </h2>
                <p className="login-text">Login Admin</p>

                <div className="form-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={(val) => setUsername(val.target.value)} />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(val) => setPassword(val.target.value)} />
                </div>
                <div className="form-field">
                    <button type="submit" className="login-btn" onClick={() => onLogin()}>Login</button>
                </div>

                <div className="login-footer">
                    <p>Copyright 2021 Portal Industries</p>
                </div>
            </div>

        </div>
    );
}
export default Login;