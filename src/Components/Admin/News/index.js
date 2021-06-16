import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios'
import MenuBar from '../MenuBar';
import { HandleTime, Url_Locahost } from "../../../config/Until";
const News = () => {
    const [dulieu, setdulieu] = React.useState([]);
    React.useEffect(() => {
        axios.get(Url_Locahost + '/getNews').then(function (response) {
            setdulieu(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <div>
            {/* <nav className="navbar navbar-light bg-dark">
                <span className="text-center" style={{color: 'white'}}>
                    Navbar text with an inline element
                </span>
            </nav> */}

            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">


                    <div className="container">
                        <Link to='/Admin/News/AddNews'><button type="button" className="btn btn-dark btn-lg">Thêm Mới Tin Tức Coffee</button></Link>
                        <div style={{ height: '60px' }}></div>
                        <div className="row">
                            {dulieu.map((val) => {
                                return (
                                    <div className="col-xl-6 KhoiTinTuc" key={val._id}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <img src={val.ImageNews} width="255px" height="255px" alt="Image News" />
                                            </div>
                                            <div className="col-xl-6">
                                                <p style={{ color: '#707070' }}><i className="fas fa-calendar-alt" style={{ color: '#e7b45a' }} /> {}</p>
                                                <h3><a href=''>{val.titleNews}</a></h3>
                                                <div className="content" dangerouslySetInnerHTML={{ __html: val.Content }} ></div>
                                            </div>
                                            <div className='ThaoTac'>
                                                <a href=""><button type="button" class="btn btn-info">Xóa</button></a>
                                                <span > </span>
                                                <a href=""><button type="button" class="btn btn-secondary">Sửa</button></a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default News;