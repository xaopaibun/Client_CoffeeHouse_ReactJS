import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { validateEmail } from '../../../config/Until';
import { getdata, login } from '../../../services';
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import ProductItem from '../TrangChu.js/ProductItem';
const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [key, setkey] = React.useState();
    const [dulieu, setdulieu] = useState([]);
    const [KQ, setKQ] = React.useState();
    React.useEffect(() => {
        getdata().then(function (response) {
            setdulieu(response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }, []);
    const filterItems = (query) => {
        return dulieu.filter((el) =>
            el.TenCoffee.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }
    const onSearch = () => {

        setKQ(filterItems(key))
    }
    return (
        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
            <div style={{ height: '50px' }}>

            </div>
            <div>
                <div className="content text-center">
                    <h1 >Tìm Kiếm Sản Phẩm</h1>
                </div>
                <div className="container" style={{ height: '200px', marginTop: '50px' }} >
                    <div className="form-group">

                        <input type="text"
                            className="form-control" onChange={(val) => setkey(val.target.value)} aria-describedby="helpId" placeholder="Nhập từ khóa tìm kiếm" />

                    </div>
                    <input onClick={() => onSearch()} className="submit" type="submit" value="Tìm kiếm" />

                </div>

                {KQ ?
                    <div class="tabs-content container">
                        <h1>Có {KQ.length} kết quả với từ khóa bạn nhập</h1>
                        <div className="content-tab01">
                            {
                                KQ?.map((value, index) => <ProductItem key={value._id.toString()} value={value} />)
                            }
                        </div>
                    </div> : <div />
                }

            </div>
            <Footer />
        </div>
    );
}
export default Search;
