import React from 'react';
import axios from 'axios';

import CKEditor from 'ckeditor4-react';

const AddProduct = () => {
    const [Ten, setTen] = React.useState();
    const [Image, setImage] = React.useState('');
    const [Gia, setGia] = React.useState();
    const [MoTa, setMoTa] = React.useState();
    const [Loai, setLoai] = React.useState();
    const [ThongTin, setThongTin] = React.useState();
    const [ThuongHieu, setThuongHieu] = React.useState();
    const [SoLuong, setSoLuong] = React.useState();
    const isChangeTen = val => setTen(val.target.value);

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

    const onChangeFile = async (evt) => {
        evt.preventDefault();
        //setImage(evt.target.files[0]);
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post('http://localhost:5000/uploadImages', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage(filePath);

        })
    }


    const ClickSubmit = async (evt) => {
        evt.preventDefault();
        if (Image == '') {
            alert('Bạn chưa chọn file.')
            return;
        }

        let dulieucanthem = await { _id: Math.random().toString(), ten: Ten, images: Image, gia: Gia, mota: MoTa, thongtin: ThongTin, thuonghieu: ThuongHieu, soluong: SoLuong, _idloai: Loai };
        await axios.post('http://localhost:5000/addCoffee', dulieucanthem)
            .then(function (response) {
                alert('Thêm thành công')
            })
            .catch(function (error) {
                alert('lỗi', error)
            });
    }

    const Add = () => {
        return (
            <div>
                <div className='container'>
                    <form encType="multipart/form-data">
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
                                    <input type="file" onChange={(evt) => onChangeFile(evt)} className="form-control-file" name="images" placeholder aria-describedby="fileHelpId" />
                                    {
                                        Image !== '' ?
                                            <div style={{ width: '100px', height: '100px' }}>
                                                <img style={{ width: '100%', height: '100%' }} src={'http://localhost:5000/images/' + Image} />
                                            </div> : <div />
                                    }
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Mô Tả</label>
                                    <CKEditor

                                        data={MoTa}
                                        onChange={(val) => onEditorChange(val)} />

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
                        <input type="submit" name="submit" className="btn btn-success  btn-lg" onClick={(evt) => ClickSubmit(evt)} value="Thêm Mới Dữ Liệu" />
                    </form>
                </div>
            </div>
        );
    }
    return (
        <div >
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <Add/>
                </div>
            </div>

        </div>
    );
}

export default AddProduct;