import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const Sua = () => {
    const dispatch = useDispatch();
    const dulieucansua = useSelector(state => state.dulieucansua);
    const [Ten, setTen] = React.useState(dulieucansua?.name);
    const [Linkimg, setLinkimg] = React.useState(dulieucansua?.img);
    const [Gia, setGia] = React.useState(dulieucansua?.Gia);
    const isChangeTen = val => setTen(val.target.value);
    const isChangeLink = val => setLinkimg(val.target.value);
    const isChangeGia = val => setGia(val.target.value);

    useEffect(() => {
        setTen(dulieucansua?.name);
        setLinkimg(dulieucansua?.img);
        setGia(dulieucansua?.Gia);
    }, [dulieucansua])
    return (
        <div>
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Chỉnh sửa thông tin Coffee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container" style={{ margintop: 50 }}>
                                <div className="form-group">
                                    <label htmlFor="">Tên ảnh : </label>
                                    <input type="text" className="form-control" value={Ten} aria-describedby="helpId" onChange={(val) => isChangeTen(val)} placeholder="Nhập Tên Cây Cảnh" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Link ảnh : </label>
                                    <input type="text" className="form-control" value={Linkimg} aria-describedby="helpId" onChange={(val) => isChangeLink(val)} placeholder="Nhập Link ảnh Cây" />
                                </div>
                                <div className="form-group">
                                    <label htmlForr="">Gía : </label>
                                    <input type="text" className="form-control" value={Gia} aria-describedby="helpId" onChange={(val) => isChangeGia(val)} placeholder="Nhập Gía" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
                            <button type="button" className="btn btn-info"  data-dismiss="modal"  onClick={() => {
                                let dulieu = { id : dulieucansua.id, name: Ten, img: Linkimg, Gia: Gia }
                                 axios.put('https://servercoffeehouse.herokuapp.com/sua/'+ dulieucansua.id, dulieu) 
                                 .then(function (response) {
                                    dispatch({ type: 'SuaDuLieu',  dulieu_update: dulieu})
                                  
                                 })
                                 .catch(function (error) {
                                    console.log(error)
                                 });
                            }} >Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sua;