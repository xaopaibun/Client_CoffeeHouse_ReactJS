
import axios from 'axios';
import React from 'react';

import Menu from '../Home/Menu';

const SanPham = () => {
    const [dulieu, setdulieu] = React.useState([]);
    const [loai, setloai] = React.useState([]);
    const GetLoai = () => {
        axios.get('https://servercoffeehouse.herokuapp.com/getloai')
            .then(function (response) {
                setloai(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    const GetCoffee = () => {
        axios.get('https://servercoffeehouse.herokuapp.com/')
            .then(function (response) {
                setdulieu(response.data);
                console.log(response.data)
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
        GetCoffee();
        GetLoai();
    }, []);

    const Xoa = (id) => {
        axios.delete('https://servercoffeehouse.herokuapp.com/xoa/' + id).then(function (response) {
            console.log(response);
            setdulieu(dulieu.filter(item => item._id !== id));
        }).catch(function (error) {
            console.log(error);
        });
    }
    const Them = () => {
        const [Ten, setTen] = React.useState();
        const [Linkimg, setLinkimg] = React.useState();
        const [Gia, setGia] = React.useState();
        const [MoTa, setMoTa] = React.useState();
        const [Loai, setLoai] = React.useState();
        const [ThongTin, setThongTin] = React.useState();
        const [ThuongHieu, setThuongHieu] = React.useState();
        const [SoLuong, setSoLuong] = React.useState();
        const isChangeTen = val => setTen(val.target.value);
        const isChangeLink = val => setLinkimg(val.target.value);
        const isChangeLoai = val => setLoai(val.target.value);
        const isChangeGia = val => setGia(val.target.value);
        const isChangeMoTa = val => setMoTa(val.target.value);
        const isChangeThuongHieu = val => setThuongHieu(val.target.value);
        const isChangeThongTin = val => setThongTin(val.target.value);
        const isChangeSoLuong = val => setSoLuong(val.target.value);
        const ClickSubmit = () => {
            let dulieucanthem = { _id: Math.random().toString(), ten: Ten, img: Linkimg, gia: Gia, mota: MoTa, thongtin: ThongTin, thuonghieu: ThuongHieu, soluong: SoLuong, _idloai: Loai };
            axios.post('https://servercoffeehouse.herokuapp.com/add', dulieucanthem)
                .then(function (response) {
                    alert('Thêm thành công')
                })
                .catch(function (error) {
                    alert('lỗi', error)
                });
        }
        return (
            <div >
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor>Tên Coffee </label>
                            <input type="text" className="form-control" onChange={(val) => isChangeTen(val)} placeholder="Nhập Tên Coffee" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Loại Coffee </label>
                            <select className="form-control" name="LoaiCoffee" id="LoaiCoffee" >
                                {
                                    loai && loai.map((val) => (
                                        <option value={val._id} onChange={(val) => isChangeLoai(val)}>{val.tenloai}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor>Hình Ảnh Coffee</label>
                            <input type="file" className="form-control-file" name="txtAnh" placeholder aria-describedby="fileHelpId" />
                            <div className="form-group">
                                <label htmlFor>Mô Tả</label>
                                <textarea className="form-control" onChange={(val) => isChangeMoTa(val)} rows={3} defaultValue={""} />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor>Số Lượng</label>
                            <input type="text" className="form-control" onChange={(val) => isChangeSoLuong(val)} placeholder="Nhập Số Lượng" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Gía</label>
                            <input type="text" className="form-control" onChange={(val) => isChangeGia(val)} placeholder="Nhập Gía" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Thương Hiệu</label>
                            <input type="text" className="form-control" onChange={(val) => isChangeThuongHieu(val)} placeholder="Nhập Thương Hiệu" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Thông Tin</label>
                            <input type="text" className="form-control" onChange={(val) => isChangeThongTin(val)} placeholder="Nhập Thông Tin" />
                        </div>
                    </div>
                </div>
                <input type="submit" name="submit" className="btn btn-success  btn-lg" onClick={() => ClickSubmit()} defaultValue="Thêm Mới Dữ Liệu" />
            </div>
        );
    }
    const DuLieuCoffee = () => {
        return (
            <table class="table table-hover" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Coffee</th>
                        <th style={{ width: '20px' }}>Loại Coffee</th>
                        <th style={{ width: '270px' }}>Mô Tả Sản Phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số Lượng</th>
                        <th>Gía Bán</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody id="body_table">
                    {
                        dulieu && dulieu.map((val, index) => {
                            return (
                                <tr key={val._id.toString()} style={{ height: '80px' }}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{val.TenCoffee}</td>
                                    <td>{val._idloai}</td>
                                    <td style={{ lineHeight: '36px', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>{val.mota}</td>
                                    <td><img width="100px" height="100px" src={val.images[0]} alt="" /></td>
                                    <td>{val.soluong}</td>
                                    <td>{val.gia} VNĐ</td>
                                    <td >
                                        <button type="button" className="btn btn-success" onClick={() => Xoa(val._id)}><i className="far fa-trash-alt"></i></button>
                                        <span> </span>
                                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modelId"><i className="fas fa-edit"></i></button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        );
    }
    return (
        <div>

            <Menu />
            <div className='container'>
                <div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Hiển thị sản phẩm</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Thêm sản phẩm</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <DuLieuCoffee />
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Them /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SanPham;
