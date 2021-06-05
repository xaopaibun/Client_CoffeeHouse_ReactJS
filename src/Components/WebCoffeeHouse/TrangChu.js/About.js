const About = () => {
    return (
        <div>
            <div className="section_about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="about_left text-justify">
                                <div className="heading a-center">
                                    <h2 className="The_h2 wow animate__bounceInDown" data-wow-duration="0.5s" data-wow-delay="1s">CHÚNG TÔI LÀ</h2>
                                    <span className="Coffee_House wow animate__bounceInDown" data-wow-duration="0.5s" data-wow-delay="1.5s">Coffee house</span>
                                </div>
                                <div className="day_time wow animate__bounceInDown" data-wow-duration="0.5s" data-wow-delay="2.3s">Thứ hai đến Thứ bảy <b>8:30am - 11:00pm</b> | Hotline: <b>18006750</b></div>
                                <span className="wow animate__bounceInDown" data-wow-duration="0.5s" data-wow-delay="3s">Chúng tôi đi khắp thế giới để tìm kiếm cà phê tuyệt vời. Trong quá trình đó, chúng tôi phát hiện ra những hạt đậu đặc biệt và hiếm đến nỗi chúng tôi có thể chờ đợi để mang chúng về.</span>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="about_right wow animate__zoomIn" data-wow-duration="2s" data-wow-delay="2s">
                                <img className="img_about" src="https://bizweb.dktcdn.net/100/346/521/themes/818256/assets/bg_about.png?1619594503248" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;