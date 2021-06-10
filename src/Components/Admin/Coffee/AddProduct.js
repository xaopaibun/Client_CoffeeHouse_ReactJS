import React from 'react';
import axios from 'axios';

import CKEditor from 'ckeditor4-react';

const AddProduct = () => {
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
   
    const isChangeThuongHieu = val => setThuongHieu(val.target.value);
    const isChangeThongTin = val => setThongTin(val.target.value);
    const isChangeSoLuong = val => setSoLuong(val.target.value);
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

    React.useEffect(() => {
        GetLoai();
    }, []);

    const onEditorChange = (evt) => {
        setMoTa(evt.editor.getData());
    } 

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
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <label htmlFor>Tên Coffee </label>
                            <input type="text" className="form-control" onChange={(val) => isChangeTen(val)} placeholder="Nhập Tên Coffee" />
                        </div>
                        <div className="form-group">
                            <label htmlFor>Loại Coffee </label>
                            <select className="form-control" name="LoaiCoffee" id="LoaiCoffee" onChange={(val) => isChangeLoai(val)} >
                                {
                                    loai && loai.map((val) => (
                                        <option value={val._id} >{val.tenloai}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor>Hình Ảnh Coffee</label>
                            <input type="file" className="form-control-file" name="txtAnh" placeholder aria-describedby="fileHelpId" />
                            <div className="form-group">
                                <label htmlFor>Mô Tả</label>
                                <CKEditor

                                    data={MoTa}
                                    onChange={(val) => onEditorChange(val)} />
                                {/* <label>
                                    Change value:
                                    <textarea value={data} onChange={() => handleChange()} />
                                </label> */}
                               
                

                                {/* <textarea className="form-control" name='mota' onChange={(val) => isChangeMoTa(val)} rows={3} /> */}
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
                <input type="submit" name="submit" className="btn btn-success  btn-lg" onClick={() => ClickSubmit()} value="Thêm Mới Dữ Liệu" />
            </div>
        </div>
    );
}

export default AddProduct;