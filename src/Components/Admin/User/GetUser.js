import React from 'react'
import axios from 'axios'
import { getUser } from '../../../services';
import { Url_Locahost } from '../../../config/Until';

const GetUser = () => {
    const [ListUser, setListUser] = React.useState();

    React.useEffect(() => {
        getUser().then(function (response) {
            setListUser(response.data);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    const Xoa = (id) => {
        axios.delete(Url_Locahost + '/deleteUser/' + id)
            .then(function (response) {
                // DonHang.filter((val) => val._id !== id)
                setListUser(ListUser.filter(item => item._id !== id))

                alert('Xóa thành công');

            })
            .catch(function (error) {

                console.log(error);
            }
            )
    }
    return (
        <div>
            <table class="table table-hover" >
                <thead>
                    <tr className='text-center'>
                        <th>STT</th>
                        <th>Họ Tên</th>
                        <th>Phone</th>
                        <th>Gmail </th>
                        <th>Tình Trạng</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody id="body_table" className='text-center' >
                    {
                        ListUser && ListUser.map((val, index) => {
                            return (
                                <tr key={val._id.toString()}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>{val.gmail}</td>
                                    <td>{val.status == true ? 'đã kích hoạt' : 'Chưa kích hoạt'}</td>
                                    <td>{val.type == true ? 'Admin' : "Khách Hàng"}</td>
                                    <td >
                                        {val.type == true ? <div /> : <div>
                                            <button type="button" className="btn btn-success" >Hủy kích hoạt</button>
                                            <span> </span>
                                            <button type="button" className="btn btn-info" onClick={() => Xoa(val._id)}>Xóa User</button>
                                        </div>
                                        }
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default GetUser;