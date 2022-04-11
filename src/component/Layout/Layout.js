import React, { useEffect, useState } from "react";
import { Header } from "./../Header/Header";
import { Sidebar } from "./../Sidebar/Sidebar";
import { Footer } from "../Footer/Footer";
import { useScroll } from "./../../hooks/useScroll";
import { HeaderMobile } from "../Header/HeaderMobile/HeaderMobile";
import { useWindowSIze } from "../../hooks/useWindowSIze";

import "./Layout.css";

const Layout = ({ children }) => {
  const size = useWindowSIze();
  useScroll();
  const [showFooter, setShowFooter] = useState(false);
  const [showRightBar, setShowRightBar] = useState(false);

  useEffect(() => {
    if (size) {
      setShowRightBar(false);
    }
  }, [size]);

  return (
    <div className="layout">
      {size && <Sidebar />}
      <Header showItems={size} toggleShowRightBar={setShowRightBar} />

      <HeaderMobile
        showRightBar={showRightBar}
        toggleShowRightBar={setShowRightBar}
      />

      <div className="content">
        <div className="content_children">{children}</div>
      </div>

      <Footer showFooter={showFooter} toggleShow={setShowFooter} />
    </div>
  );
};

export default Layout;
