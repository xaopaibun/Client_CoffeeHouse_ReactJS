import axios from 'axios';
import React from 'react';
import Menu from "../Home/Menu";
import MenuBar from '../MenuBar';
const LoaiCoffee = () => {
    const [loai, setloai] = React.useState([]);
    const [NCC, setNCC] = React.useState([]);
    const GetLoai = () => {
        axios.get('http://localhost:5000/getloai')
            .then(function (response) {
                setloai(response.data);
              
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    // const GetNCC = () => {
    //     axios.get('https://servercoffeehouse.herokuapp.com/getNCC')
    //         .then(function (response) {
    //             setNCC(response.data);
    //             console.log(response.data)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    React.useEffect(() => {
        GetLoai();
        // GetNCC();
    }, []);
    const onAdd = () =>{
        
    }
    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <div className='container'>
                        <div class="row">
                            <div class="col-xl-6">
                                <div className="form-group">
                                    <input type="text" name="" id="" class="form-control" placeholder="Nhập Tên Loại Coffee" aria-describedby="helpId" />
                                </div>
                            </div>
                            {/* <div class="col-xl-4">
                                <div className="form-group">

                                    <select className="form-control" >
                                        {
                                            NCC && NCC.map((val) => (
                                                <option value={val._id} >{val.tenncc}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div> */}
                            <div class="col-xl-6">
                                <button type="button" className="btn btn-info btn-lg" onClick = {() => onAdd()} >Thêm Loại Cà Phê</button>
                            </div>
                        </div>
                        <table class="table table-hover" >
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Loại Coffee</th>
                                    {/* <th>Tên Nhà Cung Cấp</th> */}
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody id="body_table">
                                {
                                    loai && loai.map((val, index) => {
                                        return (
                                            <tr key={val._id.toString()}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{val.tenloai}</td>
                                                {/* <td>{val._idNCC}</td> */}
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
            </div>

        </div>
    );
}
export default LoaiCoffee;