import React from "react";
import { ReactComponent as Logo } from "../../Img/SeriousLogo.svg";
import { ReactComponent as BurgerImages } from "../../Img/menu.svg";
import { NavLink, useLocation } from "react-router-dom";
// import { mainRoutes } from "./../../Routes/mainRoutes";
import { useActiveLink } from "../../hooks/useActiveLink";
import { useTranslation } from "react-i18next";

import "./Header.css";

export const Header = ({ showItems, toggleShowRightBar }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const { newMainRoutes } = useActiveLink(pathname);

  const showRightMenu = () => {
    if (showItems) return;
    toggleShowRightBar(true);
  };

  return (
    <div className="header_line">
      <div className="header_logo">
        <Logo />
      </div>
      <div className="header__navigation_burger">
        <div className="navigation">
          {showItems && (
            <ul className="header_links">
              {newMainRoutes
                .map((el) => ({ ...el, text: t(el.name) }))
                .map((item, index) => {
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
          )}
        </div>
        <div className="burger_images">
          <BurgerImages onClick={showRightMenu} />
        </div>
      </div>
    </div>
  );
};
