import { useHistory } from "react-router-dom";
const ModalCart = () => {
    const history = useHistory();
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn đã thêm sản phẩm vào giỏ hàng thành công
      </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Tiếp tục mua sắm</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick = {() => history.push("/Cart")}>Đi đến giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalCart;