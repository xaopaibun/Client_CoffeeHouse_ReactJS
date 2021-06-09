const NewsCoffee = () => {
    return (
        <div>
            <div className="tintuc">
                <div className="container">
                    <h1 className="text-center">Tin Tức</h1>
                    <div className="row">

                        <div className="col-xl-6 KhoiTinTuc">
                            <div className="row">
                                <div className="col-xl-6">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/346/521/articles/pexels-photo-374885.jpeg?v=1552981333707" width="255px" height="255px" alt="" />
                                </div>
                                <div className="col-xl-6">
                                    <p style={{ color: '#707070' }}><i className="fas fa-calendar-alt" style={{ color: '#e7b45a' }} />  07/06/2021</p>
                                    <h3><a href="ChiTietTinTuc.php?iDTinTuc=<?=$row['iDTinTuc']?>">Bloomberg: Xuất khẩu cà phê lớn thứ hai Việt Nam</a></h3>
                                    <div className="content">Tình trạng biến đổi khí hậu đang trở thành vấn đề nan giải, ngày càng ảnh hưởng rõ nét và sâu sắc đến sản xuất nông nghiệp, đặc biệt tác động mạnh đến quá trình canh tác cà phê của bà con nông dân trên địa bàn tỉnh Tây Nguyên nói chung và tỉnh Đắk Nông nói riêng.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 KhoiTinTuc">
                            <div className="row">
                                <div className="col-xl-6">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/346/521/articles/sweat-shop-coffee-shops-in-nyc.jpg?v=1552981539190" width="255px" height="255px" alt="" />
                                </div>
                                <div className="col-xl-6">
                                    <p style={{ color: '#707070' }}><i className="fas fa-calendar-alt" style={{ color: '#e7b45a' }} /> 19/03/2021</p>
                                    <h3><a href="ChiTietTinTuc.php?iDTinTuc=<?=$row['iDTinTuc']?>">Giá cà phê arabica năm 2019 dự kiến tăng tại Brazil thấp</a></h3>
                                    <div className="content">Các chuyên gia dự đoán thâm hụt toàn cầu một triệu bao loại 60 kg trong niên vụ 2019 - 2020, trong khi ước tính thặng dư là 4,25 triệu bao niên vụ 2018 - 2019.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewsCoffee;