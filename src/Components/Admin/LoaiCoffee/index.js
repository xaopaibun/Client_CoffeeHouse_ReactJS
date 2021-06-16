import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Url, Url_Locahost } from '../../../config/Until';
import Menu from "../Home/Menu";
import MenuBar from '../MenuBar';
const LoaiCoffee = () => {
    const [loai, setloai] = React.useState([]);
    const [name, setname] = React.useState();
    const history = useHistory();
    const Token = useSelector(store => store.HomeReduce.Token);
    React.useEffect(() => {
        if (!Token) {
            history.push('/Admin/login')
        }
        else {
            axios.get(Url_Locahost + '/getloai')
                .then(function (response) {
                    setloai(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, []);


    const onAdd = () => {
        axios.post(Url_Locahost + '/addloaicoffee', { tenloai: name })
            .then(function (response) {
                alert('Thêm loại mới thành công');
                history.push('/Admin');
                history.push('/Admin/LoaiSanPham');
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onEdit = () => {
        axios.put(Url_Locahost + '/updateloai', { tenloai: name })
            .then(function (response) {
                alert('Cập nhật thành công');
                history.push('/Admin');
                history.push('/Admin/LoaiSanPham');
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onDelete = (id) => {
        axios.delete(Url_Locahost + '/xoaloai/' + id)
            .then(function (response) {
                alert('Xóa thành công');
                history.push('/Admin');
                history.push('/Admin/LoaiSanPham');
            })
            .catch(function (error) {
                console.log(error);
            })
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
                                    <input type="text" onChange={(val) => setname(val.target.value)} className="form-control" placeholder="Nhập Tên Loại Coffee" aria-describedby="helpId" />
                                </div>
                            </div>

                            <div class="col-xl-6">
                                <button type="button" className="btn btn-info btn-lg" onClick={() => onAdd()} >Thêm Loại Cà Phê</button>
                            </div>
                        </div>
                        <table class="table table-hover" >
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Loại Coffee</th>
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
                                                <td >
                                                    <button type="button" className="btn btn-success" onClick={() => onDelete(val._id)}><i className="far fa-trash-alt" ></i></button>
                                                    <span> </span>
                                                    <button type="button" className="btn btn-info" onClick={() => onEdit(val._id)}><i className="fas fa-edit"></i></button>
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