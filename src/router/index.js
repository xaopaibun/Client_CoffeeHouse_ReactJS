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
import NCC from "../Components/Admin/BookingTableOnline";
import TrangChu from "../Components/WebCoffeeHouse/TrangChu.js";
import Coffee from "../Components/WebCoffeeHouse/ChiTietCoffee";
import DangNhap from "../Components/WebCoffeeHouse/DangNhap";
import DangKy from "../Components/WebCoffeeHouse/DangKy";
import AllSanPham from "../Components/WebCoffeeHouse/SanPham";
import Cart from "../Components/WebCoffeeHouse/GioHang";
import Account from "../Components/WebCoffeeHouse/Account";
import MenuBar from "../Components/Admin/MenuBar";
import QuanTri from "../Components/Admin";
import FormDienThongTin from "../Components/WebCoffeeHouse/FormDienThongTin";
import OrderDetail from "../Components/Admin/DonHang/OrderDetail";
import MenuQuanLyKhac from "../Components/Admin/QuanLyKhac";
import Login from "../Components/Admin/Login";
import AddProduct from "../Components/Admin/Coffee/AddProduct";
import EditProduct from "../Components/Admin/Coffee/EditProduct";
import AddNews from "../Components/Admin/News/AddNews";
import News from "../Components/Admin/News";
import BookingTableOnline from "../Components/Admin/BookingTableOnline";
import Home from "../Components/Admin/Home/Menu";
import QuanLyProduct from "../Components/Admin/Coffee";
import User from "../Components/Admin/User";
import QuanLyGioiThieu from "../Components/Admin/QuanLyKhac/QuanLyGioiThieu";
import QuanLyImagesShop from "../Components/Admin/QuanLyKhac/QuanLyImagesShop";
import GioiThieu from "../Components/WebCoffeeHouse/ContentWeb/GioiThieu";
import SanPhamTheoLoai from "../Components/WebCoffeeHouse/SanPham/SanPhamTheoLoai";
import Search from '../Components/WebCoffeeHouse/Search'
export default function RouterApp() {
  const Token = localStorage.getItem('Token');
  // let router = (
  //   <Switch >
  //     <Route path="/Admin/Login">
  //       <Login />
  //     </Route>
  //     <Route path="/_idCoffee=:id">
  //       <Coffee />
  //     </Route>
  //     <Route path="/DangKy">
  //       <DangKy />
  //     </Route>
  //     <Route path="/AllSanPham">
  //       <AllSanPham />
  //     </Route>
  //     <Route path={"/idLoai=:_id"} >
  //       <SanPhamTheoLoai />
  //     </Route>
  //     <Route path="/Cart">
  //       <Cart />
  //     </Route>
  //     <Route path="/Account">
  //       <Account />
  //     </Route>
  //     <Route path="/DangNhap">
  //       <DangNhap />
  //     </Route>
  //     <Route path="/Search">
  //       <Search />
  //     </Route>
  //     <Route path="/FormDienThongTin">
  //       <FormDienThongTin />
  //     </Route>
  //     <Route path="/GioiThieu">
  //       <GioiThieu />
  //     </Route>
  //     <Route path="/TrangChu">
  //       <TrangChu />
  //     </Route>
  //     <Route path="/">
  //       <TrangChu />
  //     </Route>
  //   </Switch >
  // )

  //if (!Token) {
    const router = (
    <Switch >
      <Route path="/Admin/Login">
        <Login />
      </Route>
      <Route path="/Admin/NCC">
        <NCC />
      </Route>
      <Route path="/Admin/DonHang/OrderDetail">
        <OrderDetail />
      </Route>
      <Route path="/Admin/DonHang">
        <DonHang />
      </Route>
      <Route path="/Admin/News/AddNews">
        <AddNews />
      </Route>
      <Route path="/Admin/BookingTableOnline">
        <BookingTableOnline />
      </Route>
      <Route path="/Admin/User">
        <User />
      </Route>
      <Route path="/Admin/News">
        <News />
      </Route>
      <Route path="/Admin/MenuQuanLyKhac/QuanLyGioiThieu">
        <QuanLyGioiThieu />
      </Route>
      <Route path="/Admin/MenuQuanLyKhac/QuanLyImagesShop">
        <QuanLyImagesShop />
      </Route>
      <Route path="/Admin/MenuQuanLyKhac">
        <MenuQuanLyKhac />
      </Route>
      <Route path="/Admin/LoaiSanPham">
        <LoaiCoffee />
      </Route>
      <Route path="/Admin/SanPham/EditProduct/:id">
        <EditProduct />
      </Route>
      <Route path="/Admin/SanPham/AddProduct">
        <AddProduct />
      </Route>
      <Route path="/Admin/SanPham">
        <QuanLyProduct />
      </Route>
      <Route path="/Admin/Home">
        <Home />
      </Route>
      <Route path="/Admin">
        <QuanTri />
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
      <Route path={"/idLoai=:_id"} >
        <SanPhamTheoLoai />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/Account">
        <Account />
      </Route>
      <Route path="/DangNhap">
        <DangNhap />
      </Route>
      <Route path="/Search">
        <Search />
      </Route>
      <Route path="/FormDienThongTin">
        <FormDienThongTin />
      </Route>
      <Route path="/GioiThieu">
        <GioiThieu />
      </Route>
      <Route path="/TrangChu">
        <TrangChu />
      </Route>
      <Route path="/">
        <TrangChu />
      </Route>
    </Switch >
    )
  //}

  return (
    <Router>

      {router}




    </Router>
  );
}
