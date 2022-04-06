import React from "react";
import { Header } from "./../Header/Header";
import Sidebar from "./../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import { useScroll } from "./../../hooks/useScroll";

import "./Layout.css";

const Layout = ({ children }) => {
  useScroll();

  return (
    <div className="layout">
      <Sidebar />
      <Header />

      <div className="content">
        <div className="content_children">{children}</div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
