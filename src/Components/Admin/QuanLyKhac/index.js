import React from 'react'
import Menu from "../Home/Menu";
import MenuBar from "../MenuBar";
import {
    BrowserRouter as Router,
    Link,
    useParams, useHistory
} from "react-router-dom";
import { useSelector } from "react-redux";
const MenuQuanLyKhac = () => {
    const Token = useSelector(store => store.HomeReduce.Token);
    const history = useHistory();
    React.useEffect(() =>{
        if(!Token){
            history.push('/Admin/login')
        }
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <div className="jumbotron">
                        <h5 className="display-3 text-center">Danh mục quản lý khác của website</h5>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Link to = '/Admin/MenuQuanLyKhac/QuanLyGioiThieu' className="card">
                                    <img className="card-img-top" src="https://icapi.org/wp-content/uploads/2019/11/ly-ca-phe-dep-10.jpg" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Quản lý content giới thiệu shop</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to = '/Admin/MenuQuanLyKhac/QuanLyImagesShop'  className="card">
                                    <img className="card-img-top" src="https://res.klook.com/image/upload/fl_lossy.progressive/q_65/c_fill,w_1360/blogvn/2018/09/quan-cafe-dep-seoul.jpg" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Quản lý hình ảnh coffee house</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src="https://st.quantrimang.com/photos/image/2019/05/03/Hinhnen-Coffee-3.jpg" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Quản lý địa chỉ shop</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwvPtqayREeP44mPnZa6ajwfw0QMKiFVs5Q&usqp=CAU" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Quản lý content liên hệ</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default MenuQuanLyKhac;