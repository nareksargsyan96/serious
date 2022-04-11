import React from "react";
import { Sidebar } from "../../Sidebar/Sidebar";
import { Drawer } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useActiveLink } from "../../../hooks/useActiveLink";
import Fade from "react-reveal/Fade";

import "./HeaderMobile.css";

export const HeaderMobile = ({ showRightBar, toggleShowRightBar }) => {
  const { pathname } = useLocation();

  const { newMainRoutes } = useActiveLink(pathname);

  return (
    <Drawer
      anchor="right"
      open={showRightBar}
      onClose={() => toggleShowRightBar(false)}
      classes={{
        paper: "drawer__paper",
      }}
    >
      <Fade bottom>
        <div className="drawer__navigation">
          <ul className="drawer__list">
            {newMainRoutes.map((item, index) => {
              return (
                <li className="drawer__menu_name" key={index}>
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
                    <div className="drawer__children header_child">
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
                          className={`drawer__line_children header_child_line ${
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
        <div className="drawer__sidebar">
          <Sidebar />
        </div>
      </Fade>
    </Drawer>
  );
};
