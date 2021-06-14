import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios'
import { HandleTime } from "../../../config/Until";
const News = () => {
    const [dulieu, setdulieu] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:5000/getNews').then(function (response) {
            setdulieu(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <div>
            <Link to='/Admin/News/AddNews'><button type="button" className="btn btn-dark btn-lg">Thêm Mới Tin Tức Coffee</button></Link>
            <div className="container">
                <div className="row">
                    {dulieu.map((val) => {
                        return (
                            <div className="col-xl-6 KhoiTinTuc">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <img src={val.ImageNews} width="255px" height="255px" alt="Image News" />
                                    </div>
                                    <div className="col-xl-6">
                                        <p style={{ color: '#707070' }}><i className="fas fa-calendar-alt" style={{ color: '#e7b45a' }} /> {HandleTime(val.time)}</p>
                                        <h3><a href=''>{val.titleNews}</a></h3>
                                        <div className="content" dangerouslySetInnerHTML={{ __html: val.Content }} ></div>
                                    </div>
                                    <div className='ThaoTac'>
                                        <a href=""><button type="button" class="btn btn-info">Xóa</button></a>
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

    );
}
export default News;