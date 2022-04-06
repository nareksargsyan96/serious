import React from "react";
import { ReactComponent as Logo } from "../../Img/SeriousLogo.svg";
import { NavLink, useLocation } from "react-router-dom";
// import { mainRoutes } from "./../../Routes/mainRoutes";
import { useActiveLink } from "../../hooks/useActiveLink";

import "./Header.css";

export const Header = () => {
  const { pathname } = useLocation();

  const { newMainRoutes } = useActiveLink(pathname);

  return (
    <div className="header_line">
      <div className="header_logo">
        <Logo />
      </div>

      <div className="navigation">
        <ul className="header_links">
          {newMainRoutes.map((item, index) => {
            return (
              <li className="menu_name" key={index}>
                <NavLink
                  to={item.path}
                  className={`menu_link ${item.isActive && "active"}`}
                  style={
                    item.children && pathname.includes(item.path)
                      ? { color: "#0fb7c0" }
                      : null
                  }
                  exact={item.exact}
                >
                  {item.text}
                </NavLink>
                {item?.children && (
                  <div className="header_child">
                    <NavLink
                      to={item.path}
                      className={
                        item.isActive
                          ? "header_child_line_active"
                          : "header_child_line"
                      }
                    ></NavLink>
                    {item.children?.map((item) => (
                      <NavLink
                        to={item.path}
                        key={item.path}
                        className={`header_child_line ${
                          item.isActive ? "isActive" : "hide_isActive"
                        }`}
                      >
                        <span></span>
                      </NavLink>
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
