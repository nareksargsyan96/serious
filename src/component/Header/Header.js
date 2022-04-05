import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../Img/SeriousLogo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { mainRoutes } from "./../../Routes/mainRoutes";

import "./Header.css";

export const Header = () => {
  const { pathname } = useLocation();
  const {} = useActiveLink("/")

  

  return (
    <div className="header_line">
      <div className="header_logo">
        <Logo />
      </div>

      <div className="navigation">
        <ul className="header_links">
          {mainRoutes.map((item, index) => {
            return (
              <li className="menu_name" key={index}>
                <NavLink
                  to={item.path}
                  className={"menu_link"}
                  activeClassName={"activ"}
                  style={
                    item.children && pathname.includes(item.path)
                      ? { color: "#0fb7c0" }
                      : null
                  }
                  exact={item.exact}
                >
                  {item.name}
                </NavLink>
                {item?.children && (
                  <div className="header_child">
                    <div className="header_child_line"></div>
                    {item.children?.map((item) => (
                      <div
                        key={item.path}
                        className={`header_child_line ${
                          isActiveAboutFirst ? "sasasasasa" : ""
                        }`}
                      />
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
