import axios from 'axios';
import React from 'react';
import MenuBar from '../MenuBar';


const Home = () => {
    return (
        <div >

            <div style={{ backgroundImage: "url('https://bizweb.dktcdn.net/100/346/521/themes/818256/assets/slider_1.jpg?1619594503248')", backgroundSize: 'cover', width: '100%', height: "660px" }}>
                <div className="row">
                    <div className="col-xl-2" style={{opacity: 0.8}}>
                        <MenuBar />
                    </div>
                    <div className="col-xl-10" style={{opacity: 0.8}}>
                        <h1 className='text-center' style={{marginTop: '26px'}}>Chào mừng bạn Phạm Jin</h1>
                        <h1 className='text-center' style={{marginTop: '18px'}}>Đã đến với Web App quản lý Coffee House</h1>
                    </div>
                </div>
            </div>



        </div>
    );
}
export default Home;