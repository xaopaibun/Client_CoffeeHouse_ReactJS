import axios from 'axios';
import React from 'react';
import { cancelBookingTableOnline, deleteBookingTableOnline, getBookingTableOnline, updateBookingTableOnline } from '../../../services';
import Menu from "../Home/Menu";
import MenuBar from '../MenuBar';
import { useHistory } from "react-router-dom";
const BookingTableOnline = () => {
    const history = useHistory();
    const [BookingTableOnline, setBookingTableOnline] = React.useState([]);
const [Table, setTable] = React.useState('');
    React.useEffect(() => {
        getBookingTableOnline()
            .then(function (response) {
                setBookingTableOnline(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    const onUpdate = async (id) => {
        
         await updateBookingTableOnline(id).then(function (response) {
            history.push('/Admin')
            history.push('/Admin/BookingTableOnline')
            alert('Cập nhật thành công')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    const onCance = (id) =>{
        cancelBookingTableOnline(id).then(function (response) {
            alert('hủy thành công')
            history.push('/Admin')
            history.push('/Admin/BookingTableOnline')
            
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const onDelete = (id) => {
        deleteBookingTableOnline(id).then(function (response) {
            setBookingTableOnline(BookingTableOnline.filter(item => item._id !== id));
            alert('Xóa thành công')
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <div>

            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    
                    <div className='container'>
                        <table class="table table-hover" >
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ Tên</th>
                                    <th>Phone</th>
                                    <th>Ngày Đặt</th>
                                    <th>Khung giờ đặt</th>
                                    <th>Tình trạng</th>
                                    <th>Table</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody id="body_table">
                                {
                                    BookingTableOnline && BookingTableOnline.map((val, index) => {
                                        return (
                                            <tr key={val._id.toString()}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{val.fullname}</td>
                                                <td>{val.phone}</td>
                                                <td><strong>{val.date}</strong></td>
                                                <td>{val.timeslot}</td>
                                                <td>
                                                    <strong>{val.status == 1  ? 'Đã xử lý' : val.status == 2  ? 'Đã hủy' : 'Chưa xử lý'}</strong>
                                                </td>
                                                <td>
                                                    {val.table ? val.table : Table}
                                                </td>
                                                <td>
                                                    {val.status == 0 ? <button type="button" class="btn btn-outline-dark btn-lg" onClick={() => onUpdate(val._id)}>Random Bàn</button> :val.status  == 1 ? <button type="button" onClick = {() => onCance(val._id)} class="btn btn-danger btn-lg">Hủy</button> :<div/>}
                                                    <span > </span>
                                                    <button type="button" class="btn btn-dark btn-lg" onClick={() => onDelete(val._id)}>Xóa</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default BookingTableOnline;