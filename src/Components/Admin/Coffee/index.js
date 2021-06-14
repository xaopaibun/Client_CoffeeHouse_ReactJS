import SanPham from "../Coffee/SanPham"
import MenuBar from "../MenuBar";

const QuanLyProduct = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-2">
                    <MenuBar />
                </div>
                <div className="col-xl-10">
                    <SanPham/>
                </div>
            </div>
           

        </div>
    );
}
export default QuanLyProduct;