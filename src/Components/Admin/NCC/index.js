import axios from 'axios';
import React from 'react';
import Menu from "../Home/Menu";
const NCC = () => {
 
    const [NCC, setNCC] = React.useState([]);
  
    const GetNCC = () => {
        axios.get('https://servercoffeehouse.herokuapp.com/getNCC')
            .then(function (response) {
                setNCC(response.data);
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    React.useEffect(() => {
       
        GetNCC();
    }, []);

    return (
        <div>
            <Menu />
            <div className='container'>
                {/* <div class="row">
                    <div class="col-xl-4">
                        <div className="form-group">
                            <input type="text" name="" id="" class="form-control" placeholder="Nhập Tên Loại Coffee" aria-describedby="helpId" />
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div className="form-group">
                    
                            <select className="form-control" >
                                {
                                    NCC && NCC.map((val) => (
                                        <option value={val._id} >{val.tenncc}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <button type="button" className="btn btn-info" >Thêm</button>
                    </div>
                </div> */}



                <table class="table table-hover" >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Shop</th>
                            <th>Địa Chỉ Shop</th>
                            <th>Số Điện Thoại</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody id="body_table">
                        {
                            NCC && NCC.map((val, index) => {
                                return (
                                    <tr key={val._id.toString()}>
                                        <td scope="row">{index + 1}</td>
                                        <td>{val.tenncc}</td>
                                        <td>{val.diachi}</td>
                                        <td>{val.sdt}</td>
                                        <td >
                                            <button type="button" className="btn btn-success" ><i className="far fa-trash-alt"></i></button>
                                            <span> </span>
                                            <button type="button" className="btn btn-info"><i className="fas fa-edit"></i></button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default NCC;