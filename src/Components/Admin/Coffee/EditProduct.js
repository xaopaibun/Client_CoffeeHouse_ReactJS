import React from 'react';
import axios from 'axios';

import CKEditor from 'ckeditor4-react';
import MenuBar from "../MenuBar";
import { getCoffee, updateCoffee } from '../../../services';
import { useHistory, useParams } from 'react-router-dom';
import { Url_Image, Url_Locahost } from '../../../config/Until';
const EditProduct = () => {
    const [data, setdata] = React.useState();
    const [Ten, setTen] = React.useState();
    const [Image, setImage] = React.useState();
    const [Gia, setGia] = React.useState(data?.gia);
    const [MoTa, setMoTa] = React.useState(data?.mota);
    const [Loai, setLoai] = React.useState();
    const [ThongTin, setThongTin] = React.useState(data?.thongtin);
    const [ThuongHieu, setThuongHieu] = React.useState(data?.thuonghieu);
    const [SoLuong, setSoLuong] = React.useState(data?.soluong);
    const isChangeTen = val => setTen(val.target.value);

    const isChangeLoai = val => setLoai(val.target.value);
    const isChangeGia = val => setGia(val.target.value);

    const isChangeThuongHieu = val => setThuongHieu(val.target.value);
    const isChangeThongTin = val => setThongTin(val.target.value);
    const isChangeSoLuong = val => setSoLuong(val.target.value);
    const [loai, setloai] = React.useState([]);

    let { id } = useParams();
    const history = useHistory();
    
    React.useEffect(() => {
        axios.get( Url_Locahost+ '/getloai').then(function (response) {
            setloai(response.data);
        }).catch(function (error) {
            console.log(error);
        })

        getCoffee(id).then(function (response) {
            setTen(response.data.TenCoffee)
            setImage(response.data.images);
            setLoai(response.data._idloai);
            setMoTa(response.data.mota);
            setSoLuong(response.data.soluong);
            setThuongHieu(response.data.thuonghieu);
            setThongTin(response.data.thongtin);
            setGia(response.data.gia)
           // setdata(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }, [id]);

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
        await axios.post( Url_Locahost+'/uploadImages', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage(filePath);

        })
    }

    const ClickSubmit = (evt) => {
        evt.preventDefault();
        if (Image == '') {
            alert('Bạn chưa chọn file.')
            return;
        }
        let dulieucanthem = { ten: Ten, images: Image, gia: Gia, mota: MoTa, thongtin: ThongTin, thuonghieu: ThuongHieu, soluong: SoLuong, _idloai: Loai };
        updateCoffee(id,dulieucanthem).then(function (response) {
            alert('Update thành công');
            history.push('/Admin/SanPham')
        }).catch(function (error) {
                alert('lỗi', error)
        });
    }

    return (
        <div >
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                <div className='container'>
                    <form encType="multipart/form-data">
                        <div className='row'>

                            <div className='col-6'>
                                <div className="form-group">
                                    <label htmlFor>Tên Coffee </label>
                                    <input type="text" value={Ten} className="form-control" onChange={(val) => isChangeTen(val)} placeholder="Nhập Tên Coffee" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Loại Coffee </label>
                                    <select className="form-control" value={Loai} name="LoaiCoffee" id="LoaiCoffee" onChange={(val) => isChangeLoai(val)} >
                                        {
                                            loai && loai.map((val) => (
                                                <option value={val._id} >{val.tenloai}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Hình Ảnh Coffee</label>
                                    <input type="file"  onChange={(evt) => onChangeFile(evt)} className="form-control-file" name="images" placeholder aria-describedby="fileHelpId" />
                                    {
                                        Image !== '' ?
                                            <div style={{ width: '100px', height: '100px' }}>
                                                <img style={{ width: '100%', height: '100%' }} src={Url_Image + Image} />
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
                                    <input type="text" value={SoLuong}  className="form-control" onChange={(val) => isChangeSoLuong(val)} placeholder="Nhập Số Lượng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Gía</label>
                                    <input type="text" value={Gia} className="form-control" onChange={(val) => isChangeGia(val)} placeholder="Nhập Gía" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Thương Hiệu</label>
                                    <input type="text" value={ThuongHieu} className="form-control" onChange={(val) => isChangeThuongHieu(val)} placeholder="Nhập Thương Hiệu" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor>Thông Tin</label>
                                    <input type="text" value={ThongTin} className="form-control" onChange={(val) => isChangeThongTin(val)} placeholder="Nhập Thông Tin" />
                                </div>
                                <input type="submit" name="submit" className="btn btn-success  btn-lg" onClick={(evt) => ClickSubmit(evt)} value="Cập nhật thông tin" />
                            </div>
                        </div>
                        
                    </form>
                </div>
                </div>
            </div>

        </div>
    );
}

export default EditProduct;