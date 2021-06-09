import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import MenuCoffeeHouse from "../Menu";
import { useHistory } from "react-router-dom";
import { thanhtoan } from "../../../services";

const Cart = () => {
    const history = useHistory();

    const cart = useSelector(state => state.HomeReduce.cart)

    const dispatch = useDispatch();

    const removeItem = (_id) => {
        dispatch({ type: "RemoveCart", _id: _id })
    }

    dispatch({ type: "SumMoneyCart" })


    const BackHome = () => {
        history.push('/TrangChu');
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
                                            <tr className="text-center" key={val._id.toString()}>
                                                <td scope="row">{index + 1}</td>
                                                <td><img width="100px" height="100px" src={val.images} alt="" /></td>
                                                <td>{val.TenCoffee} <br /><a href='' style={{ color: 'green' }} onClick={(e) => {
                                                    e.preventDefault();
                                                    removeItem(val._id);
                                                }}>Xóa</a></td>
                                                <td>{Intl.NumberFormat().format(val.gia)} VNĐ</td>
                                                <td style={{ width: '20px' }}>{val.soluong}</td>
                                                <td>{Intl.NumberFormat().format(parseInt(val.gia) * parseInt(val.soluong))} VNĐ</td>

                                            </tr>
                                        );
                                    })
                                }
                                <tr style={{ justifyContent: 'center' }}>
                                    <td scope="row"></td>
                                    <td><input id="btnDangKy" onClick={() => BackHome()} className="Xem_Them" type="submit" value="Tiếp tục mua hàng" /></td>
                                    <td>&nbsp;</td>
                                    <td><b>Tổng tiền thanh toán : </b></td>
                                    <td><b>{ } VNĐ</b></td>
                                    <td><input id="btnDangKy" onClick={() => history.push('/FormDienThongTin')} className="submit" type="submit" value="Tiến hành thanh toán" /></td>
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