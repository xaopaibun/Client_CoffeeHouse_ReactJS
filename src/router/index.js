import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SanPham from "../Components/Admin/Coffee/SanPham";
import LoaiCoffee from "../Components/Admin/LoaiCoffee";
import Menu from "../Components/Admin/Home/Menu";
import DonHang from "../Components/Admin/DonHang";
import NCC from "../Components/Admin/NCC";
import TrangChu from "../Components/WebCoffeeHouse/TrangChu.js";
import Coffee from "../Components/WebCoffeeHouse/ChiTietCoffee";
import DangNhap from "../Components/WebCoffeeHouse/DangNhap";
import DangKy from "../Components/WebCoffeeHouse/DangKy";
import AllSanPham from "../Components/WebCoffeeHouse/SanPham";
import Cart from "../Components/WebCoffeeHouse/GioHang";
import Account from "../Components/WebCoffeeHouse/Account";


export default function RouterApp() {
  return (
    <Router>
        <Switch>
        
           <Route path="/Admin/NCC">
            <NCC />
          </Route>
           <Route path="/Admin/DonHang">
            <DonHang />
          </Route>
          <Route path="/Admin/LoaiCoffee">
            <LoaiCoffee/>
          </Route>
          <Route path="/Admin/SanPham">
            <SanPham />
          </Route>
          <Route path="/Admin">
            <Menu />
          </Route>
          <Route path="/_idCoffee=:id">
            <Coffee />
          </Route>
          <Route path="/DangKy">
            <DangKy />
          </Route>
          <Route path="/AllSanPham">
            <AllSanPham />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Account">
            <Account/>
          </Route>
          <Route path="/DangNhap">
            <DangNhap />
          </Route>
          <Route path="/TrangChu">
            <TrangChu />
          </Route>
          <Route path="/">
            <TrangChu />
          </Route>
          
         
        </Switch>
      
    </Router>
  );
}
