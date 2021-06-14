import axios from "axios";
import React from "react";
import { HandleTime } from "../../../config/Until";

const NewsCoffee = () => {
    const [dulieu, setdulieu] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:5000/getNewslimit').then(function (response) {
            setdulieu(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <div>
            <div className="tintuc">
                <div className="container">
                    <h1 className="text-center">Tin Tức</h1>
                    <div className="row">
                        {
                            dulieu.length == 2 &&  dulieu.map((val) => {
                                return (
                                    <div className="col-xl-6 KhoiTinTuc">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <img src={val.ImageNews} width="255px" height="255px" alt="Image News" />
                                            </div>
                                            <div className="col-xl-6">
                                                <p style={{ color: '#707070' }}><i className="fas fa-calendar-alt" style={{ color: '#e7b45a' }} /> {HandleTime(val.time)}</p>
                                                <h3><a href =''>{val.titleNews}</a></h3>
                                                <div className="content" dangerouslySetInnerHTML={{ __html: val.Content}} ></div>
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
    );
}
export default NewsCoffee;