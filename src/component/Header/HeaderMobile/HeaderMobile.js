import React from 'react';
import clsx from 'clsx';
import { Drawer } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { Sidebar } from '../../Sidebar/Sidebar';
import { useActiveLink } from '../../../hooks/useActiveLink';

import styles from './HeaderMobile.module.scss';

export const HeaderMobile = ({ showRightBar, toggleShowRightBar }) => {
  const { pathname } = useLocation();

  const { newMainRoutes } = useActiveLink(pathname);

  return (
    <Drawer
      anchor="right"
      open={showRightBar}
      onClose={() => toggleShowRightBar(false)}
      classes={{
        paper: styles.drawer__paper,
      }}
    >
      <div className={styles.drawer__navigation}>
        <ul className={styles.drawer__list}>
          {newMainRoutes.map((item) => {
            return (
              <li className={styles.drawer__menu_name} key={item.path}>
                <NavLink
                  to={item.path}
                  className={clsx(styles.menu_link, item.isActive && styles.active)}
                  style={
                    item.children && pathname.includes(item.path) ? { color: '#0fb7c0' } : null
                  }
                  exact={item.exact}
                >
                  {item.text}
                </NavLink>
                {item?.children && (
                  <div className={clsx(styles.drawer__children, styles.header_child)}>
                    <NavLink
                      to={item.path}
                      className={
                        item.isActive ? styles.header_child_line_active : styles.header_child_line
                      }
                    />
                    {item.children?.map((item) => (
                      <NavLink
                        to={item.path}
                        key={item.path}
                        className={clsx(
                          styles.drawer__line_children,
                          styles.header_child_line,
                          item.isActive ? styles.isActive : styles.hide_isActive,
                        )}
                      >
                        <span />
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.drawer__sidebar}>
        <Sidebar />
      </div>
    </Drawer>
  );
};
