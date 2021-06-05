
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import MenuCoffeeHouse from "../Menu";
const Cart = () => {
    const cart = useSelector(state => state.HomeReduce.cart)
    const dispatch = useDispatch();
    const removeItem = (_id) =>{
        dispatch({type: "RemoveCart" , _id : _id})
    }
    return (
        <div>

            <div style={{ height: '260px' }}>
                <MenuCoffeeHouse />
            </div>
            <div className="container">
                <h1>Giỏ Hàng Của Bạn</h1>
                {
                    cart.length === 0 ? <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
                        <strong>Không có sản phẩm nào trong giỏ hàng. </strong> Mời bạn quay lại shop để tiếp tục mua sắm.
                </div>
                        :

                        <table className="table table-hover" style={{ marginTop: '50px', marginBottom: '50px' }}>
                            <thead className="text-center" style={{ backgroundColor: '#f7f7f7', border: 'none' }}>
                                <tr>
                                    <th>STT</th>
                                    <th>Hình ảnh</th>
                                    <th>Thông Tin Sản Phẩm</th>
                                    <th>Đơn Gía</th>
                                    <th>Số Lượng</th>
                                    <th>Thành Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((val, index) => {
                                        return (
                                            <tr className="text-center" key = {val._id.toString()}>
                                                <td scope="row">{index + 1}</td>
                                                <td><img width="100px" height="100px" src={val.images} alt="" /></td>
                                                <td>{val.TenCoffee} <br /><a onClick={() => removeItem(val._id)}>Xóa</a></td>
                                                <td>{Intl.NumberFormat().format(val.gia)} VNĐ</td>
                                                <td style={{ width: '20px' }}>{val.soluong}</td>
                                                <td>{Intl.NumberFormat().format(parseInt(val.gia) * parseInt(val.soluong))} VNĐ</td>

                                            </tr>
                                        );
                                    })
                                }
                                <tr>
                                    <td scope="row"><button type="submit" className="btn btn-light btn-lg" name="Update_SoLuongSP">Cập Nhật</button></td>
                                    <td>&nbsp;</td>
                                    <td><b>Tổng Tiền</b></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td><b>{ } VNĐ</b></td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                }
            </div>
            <Footer />
        </div>
    );
}
export default Cart;