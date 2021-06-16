import React from 'react';
import axios from 'axios';

import CKEditor from 'ckeditor4-react';

const AddNews = () => {
    const [titleNews, settitleNews] = React.useState();
    const [ImageNews, setImageNews] = React.useState();
    const [Content, setContent] = React.useState();
    const isChangetitleNews = val => settitleNews(val.target.value);
 const onEditorChange = (evt) => {
        setContent(evt.editor.getData());
    }
    const onAddNews = (evt) => {
        evt.preventDefault();
        if (!ImageNews) {
            alert('Bạn chưa chọn file.')
            return;
        }
        const formData = new FormData();
        formData.append("images", ImageNews);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('http://localhost:5000/avatar', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImageNews('http://localhost:5000/images/' + filePath);
        })
    }
    let onenews = { titleNews: titleNews, ImageNews: ImageNews, Content: Content }
    axios.post('http://localhost:5000/addNews', onenews)
        .then(function (response) {
            alert(response.data)
        })
        .catch(function (error) {

            console.log(error);
        })
        .then(function () {
            // always executed
        });

    return (
        <div>
            <div className="container">
                <h1 className="text-center"> Thêm Mới Tin Tức</h1>
                <form encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor>Tiêu Đề Tin Tức</label>
                        <input type="text" onChange={(val) => isChangetitleNews(val)} className="form-control" name="txtTieuDe" placeholder="Nhập Tiêu Đề Tin Tức" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Hình Ảnh Tin</label>
                        <input type="file" onChange={(evt) => {
                            evt.preventDefault();
                            setImageNews(evt.target.files[0]);
                        }} className="form-control-file" name="images" id placeholder aria-describedby="fileHelpId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Nội Dung Tin Tức</label>
                        {
                            ImageNews !== '' ?  <img src={ImageNews} style={{height: '100px', width: '100px'}}/> :<div/>
                        }
                       
                        <CKEditor
                            data={Content}
                            onChange={(val) => onEditorChange(val)} />
                    </div>
                    <input type="submit" onClick={(evt) => onAddNews(evt)} name="submit" className="btn btn-info" value="Thêm Mới Tin Tức" />
                </form>
            </div>
        </div>

    );
}
export default AddNews;