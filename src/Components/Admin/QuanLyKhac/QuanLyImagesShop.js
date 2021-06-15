import React from 'react';
import { getImagesShop, UpdateImagesShop } from '../../../services';
import MenuBar from '../MenuBar';
import axios from 'axios'
import { Url_Locahost } from '../../../config/Until';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const QuanLyImagesShop = () => {
    const [dulieu, setdulieu] = React.useState();
    const [Image1, setImage1] = React.useState('');
    const [Image2, setImage2] = React.useState('');
    const [Image3, setImage3] = React.useState('');
    const [Image4, setImage4] = React.useState('');
    const [Image5, setImage5] = React.useState('');
    const history = useHistory();
    const Token = useSelector(store => store.HomeReduce.Token);
    React.useEffect(() => {
        if (!Token) {
            history.push('/Admin/login')
        }
        else {
            getImagesShop().then(res => setdulieu(res.data[0])).catch(error => alert(error))
        }
    }, [])

    const onChangeFile1 = async (evt) => {
        evt.preventDefault();
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(Url_Locahost + 'uploadImages', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage1(filePath);
        })
    }
    const onChangeFile2 = async (evt) => {
        evt.preventDefault();
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(Url_Locahost + 'uploadImages', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage2(filePath);
        })
    }
    const onChangeFile3 = async (evt) => {
        evt.preventDefault();
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(Url_Locahost + 'uploadImages', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage3(filePath);
        })
    }
    const onChangeFile4 = async (evt) => {
        evt.preventDefault();
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.post(Url_Locahost + 'uploadImages', formData, config).then(res => {
            console.log('RES', res.data.fileNameInServer)
            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage4(filePath);
        })
    }
    const onChangeFile5 = async (evt) => {
        evt.preventDefault();
        const formData = await new FormData();
        formData.append("images", evt.target.files[0]);
        const config = await {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(Url_Locahost + 'uploadImages', formData, config).then(res => {

            let filePath = res.data.fileNameInServer
            if (filePath) {
                filePath = filePath.split('\\')[1]
            }
            setImage5(filePath);
        })
    }
    const ClickSubmit = (evt) => {
        evt.preventDefault();
        let dulieu = { images: [Image1, Image2, Image3, Image4, Image5] };
        UpdateImagesShop(dulieu).then(res => alert('cập nhật ảnh thành công')).catch(err => alert('thất bại'))
    }


    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <div className="jumbotron">
                        <h5 className="display-3 text-center">Update Image Shop Coffee House</h5>
                    </div>
                    <form encType="multipart/form-data">
                        <div className="container">
                            <div className="row">
                                <div class="col-xl-12">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor>UpLoad ảnh số 1 (ảnh to bên trái )</label>
                                            <input type="file" onChange={(evt) => onChangeFile1(evt)} className="form-control-file" name='images' id placeholder aria-describedby="fileHelpId" />
                                        </div>
                                        <img src={dulieu?.Images[0]} style={{ width: '200px', height: '200px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="form-group">
                                        <label htmlFor>UpLoad ảnh số 2</label>
                                        <input type="file" onChange={(evt) => onChangeFile2(evt)} className="form-control-file" name='images' id placeholder aria-describedby="fileHelpId" />
                                    </div>
                                    <img src={dulieu?.Images[1]} style={{ width: '200px', height: '200px' }} />


                                </div>
                                <div className="col-xl-3">
                                    <div className="form-group">
                                        <label htmlFor>UpLoad ảnh số 3</label>
                                        <input type="file" onChange={(evt) => onChangeFile3(evt)} className="form-control-file" name='images' id placeholder aria-describedby="fileHelpId" />
                                    </div>
                                    <img src={dulieu?.Images[2]} style={{ width: '200px', height: '200px' }} />
                                </div>


                                <div className="col-xl-3">
                                    <div className="form-group">
                                        <label htmlFor>UpLoad ảnh số 4</label>
                                        <input type="file" onChange={(evt) => onChangeFile4(evt)} className="form-control-file" name='images' id placeholder aria-describedby="fileHelpId" />
                                    </div>
                                    <img src={dulieu?.Images[3]} style={{ width: '200px', height: '200px' }} />
                                </div>
                                <div className="col-xl-3">
                                    <div className="form-group">
                                        <label htmlFor>UpLoad ảnh số 5</label>
                                        <input type="file" onChange={(evt) => onChangeFile5(evt)} className="form-control-file" name='images' id placeholder aria-describedby="fileHelpId" />
                                    </div>
                                    <img src={dulieu?.Images[4]} style={{ width: '200px', height: '200px' }} />
                                </div>
                            </div>

                        </div>
                        <button type="submit" onClick={() => ClickSubmit()} class="btn btn-primary btn-lg" style={{ margin: 'auto', marginTop: '20px' }}>Cập nhật Images Shop</button>
                    </form>
                </div>


            </div>

        </div >
    );
}
export default QuanLyImagesShop;