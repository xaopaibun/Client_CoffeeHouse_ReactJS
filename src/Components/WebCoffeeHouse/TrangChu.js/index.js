import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import About from "./About";
import ImagesShop from "./ImagesShop";
import Products from "./Products";


const TrangChu = () => {
    return (
        <div>
            <div className="header" style={{ backgroundImage: "url('https://bizweb.dktcdn.net/100/346/521/themes/818256/assets/slider_1.jpg?1619594503248')" }}>
                <MenuCoffeeHouse />
            </div>
            <About />
            <Products/>
            <ImagesShop />
            <Footer />
        </div>
    );
}
export default TrangChu;