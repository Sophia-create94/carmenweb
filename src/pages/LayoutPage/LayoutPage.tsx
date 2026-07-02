import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import logo from '../../../src/img/logo.png';
import './LayoutPage.css';
import Footer from "./Footer/Footer";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import { useState } from "react";
import Popup from "../../components/Popup/Popup";

const Layout = () => {

  return (
    <>
      <Popup />
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt=""  />
        </Link>
        <Link to="/" className="title-link">
          <h1>
            Kinder- & Jugendarztpraxis <br className="break-title" /> Dr. med. Carmen Müller
          </h1>
        </Link>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="sub-footer">
        <Link 
          className="print" 
          to="/about"
          onClick={() => window.scrollTo(0, 0)}>
            Impressum
        </Link>
        <ScrollToTopButton />
      </div>
    </>
  )
};

export default Layout;