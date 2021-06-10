import React from 'react';
import axios from 'axios';

import CKEditor from 'ckeditor4-react';

const AddNews = () => {
    const [titleNews, settitleNews] = React.useState();
    const [ImageNews, setImageNews] = React.useState();
    const [Content, setContent] = React.useState();
    const isChangetitleNews = val => settitleNews(val.target.value);
    const isChangeImageNews = val => setImageNews(val.target.value);
    const onEditorChange = (evt) => {
        setContent(evt.editor.getData());
    } 
    const onAddNews = () =>{
        let onenews = {titleNews : titleNews,ImageNews : ImageNews,Content : Content  }
        axios.post('http://localhost:5000/addNews', onenews)
        .then(function (response) {
            alert(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center"> Thêm Mới Tin Tức</h1>
           
                    <div className="form-group">
                        <label htmlFor>Tiêu Đề Tin Tức</label>
                        <input type="text" onChange={(val) =>isChangetitleNews(val) } className="form-control" name="txtTieuDe" placeholder="Nhập Tiêu Đề Tin Tức" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Hình Ảnh Tin</label>
                        <input type="file" className="form-control-file" onChange={(val) =>isChangeImageNews(val) } name="txtHinhAnhTin" id placeholder aria-describedby="fileHelpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Nội Dung Tin Tức</label>
                        <CKEditor
                                    data={Content}
                                    onChange={(val) => onEditorChange(val)} />
                    </div>
                    <input type="submit" onClick = {() => onAddNews() } name="submit" className="btn btn-info" value="Thêm Mới Tin Tức" />
               
            </div>
        </div>

    );
}
export default AddNews;