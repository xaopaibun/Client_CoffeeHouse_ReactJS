import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { onBookingTableOnline } from '../../../services';
const BookingTableOnline = () => {
    const [fullname, setfullname] = React.useState();
    const [phone, setphone] = React.useState();
    const [date, setdate] = React.useState();
    const [timeslot, settimeslot] = React.useState();
    const Time = ['7.00 AM', '8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM', '1.00 PM', '2.00 PM', '3.00 PM', '4.00 PM', '5.00 PM', '6.00 PM', '7.00 PM',  '8.00 PM', '9.00 PM', '10.00 PM' ]
    
    const onSubmit = () =>{
        let dulieu = {fullname : fullname, phone : phone, date:date, timeslot : timeslot}
        onBookingTableOnline(dulieu).then(function (response) {
            alert("Bạn đã đặt bàn thành công, Chúng tôi sẽ sớm liên hệ đến bạn !")
            setfullname('');
            setphone('');
            setdate('');
            settimeslot('');
        }).catch(function (error) {
            alert("Có lỗi gì đó, bạn vui lòng thử lại sau !")
        });  
    }
    
    return (
        
        <div style={{backgroundImage: 'url("http://bizweb.dktcdn.net/100/346/521/themes/818256/assets/bg_hours_book.jpg?1593508429561")'}}>
            <div className="section_hours_book form_contact_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12 content_left wow animate__bounceInDown" data-wow-duration="1s" data-wow-delay="2s" data-wow-offset={50}>
                            <div className="heading a-center">
                                <h2>Giờ mở cửa</h2>
                            </div>
                            <div className="content_hour">
                                <p className="option_1">Thứ 2 - Thứ 6 hàng tuần</p>
                                <span>7am - 11am</span>
                                <span>11am - 10pm</span>
                                <p className="option_2">Thứ 7, Chủ nhật hàng tuần</p>
                                <span>8am - 1 am</span>
                                <span>11am - 9pm</span>
                            </div>
                            <div className="hotline_hour">
                                <div className="sdt">Số điện thoại</div>
                                <a href="tel:18006750">18006750</a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 to_animate text-center  wow animate__bounceInDown " data-wow-duration="1s" data-wow-delay="1s" data-wow-offset={80}>
                            <div className="heading a-center">
                                <h2>Bạn có muốn đặt bàn ?</h2>
                                <span className="padding-top-10">Gọi ngay cho chúng tôi để đặt bàn</span>
                            </div>
                            <div className="form-wrapper columns_margin_bottom_20  columns_padding_15">

                                <div id="emtry_contact" className="form-signup form_contact clearfix">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6 form-builder-item">
                                            <fieldset className="form-group">
                                                <input style={{color: 'white'}} value={fullname} onChange={(val) => setfullname(val.target.value)} className="form-control" type="text" name="txtHoTen" id="name" placeholder="Tên của bạn" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 form-builder-item">
                                            <fieldset className="form-group">
                                                <input className="form-control"style={{color: 'white'}}value={phone}  onChange={(val) => setphone(val.target.value)} onkeypress="preventNonNumericalInput(event)" autoComplete="off" type="text" name="txtSDT" placeholder="Số điện thoại" required />
                                            </fieldset>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 form-builder-item">
                                            <div className="form-group line-item-property__fields">
                                                <div className="field-date input-groups">
                                                    <input style={{color: 'white'}}  onChange={(val) => setdate(val.target.value)} className="tourmaster-datepicker form-control" defaultValue autoComplete="off" id="datesss" name="txtNgayDat" type="date" placeholder="Ngày" data-date-format="dd MM yyyy" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 form-builder-item hour_check">
                                            <fieldset className="form-group">
                                                <input placeholder="Giờ" type="text" autoComplete="off" className="form-control" defaultValue name="txtGio" required  autoComplete="off"/>
                                                <span className="input-group-addons"><i className="fas fa-calendar-alt" /></span>
                                                <select  value={timeslot} style={{color: 'white'}} name="Gio" id="guiest_id1"   onChange={(val) => settimeslot(val.target.value)}>
                                                    {
                                                        Time.map((val) => (<option style={{color: 'black'}} value={val}>{val}</option>))
                                                    }
                                                    
                                                </select>
                                            </fieldset>
                                        </div>
                                        {/* <input type="hidden" id="email1" class="form-control form-control-lg hidden" value="emailmacdinh@gmail.com" name="contact[email]">
                                  <input type="hidden" name="contact[body]" value="hidden@noidung" id="comment" class="hidden form-control form-control-lg val_content"> */}
                                    </div>
                                    <div className="wrap-forms wrap-forms-buttons margin-top-25 f-left w_100">
                                        <div className="row">
                                            <div className="col-sm-12 wrap-buttons text-center">
                                                <button  onClick={() => onSubmit()} className="theme_button wide_button color1 btn btn-primary  btnsubmit" type="submit">Gửi ngay cho chúng tôi</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingTableOnline;