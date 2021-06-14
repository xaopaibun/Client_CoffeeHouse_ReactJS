import React from 'react';
import axios from 'axios';

import CKEditor from 'ckeditor4-react';
import MenuBar from '../MenuBar';
import { useHistory } from "react-router-dom"; 
import { getContentGioiThieuShop, UpdateContentGioiThieuShop } from '../../../services';

const QuanLyGioiThieu = () => {
    const [Content, setContent] = React.useState();
    const history = useHistory();
    const onEditorChange = (evt) => {
        setContent(evt.editor.getData());
    }

    const onUpdate = () => {
        UpdateContentGioiThieuShop({content : Content}).then(res => {
            alert('Cập nhật thành công');
            history.push('/Admin/MenuQuanLyKhac')
        }).catch(err => console.log(err ));
    }

    React.useEffect(() =>{
        getContentGioiThieuShop().then(res => setContent(res.data[0].content)).catch(err => console.log(err ));
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <div className="container">
                        <CKEditor
                            data={Content}
                            onChange={(val) => onEditorChange(val)} />
                        <input type="submit" onClick={() => onUpdate()} name="submit" className="btn btn-info" value="Cập nhật trang giới thiệu" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuanLyGioiThieu;