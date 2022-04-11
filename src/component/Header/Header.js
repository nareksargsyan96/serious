import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Logo } from '../../assets/images/SeriousLogo.svg';
import { ReactComponent as BurgerImages } from '../../assets/images/menu.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useActiveLink } from '../../hooks/useActiveLink';

import styles from './Header.module.scss';
import clsx from 'clsx';

export const Header = ({ showItems, toggleShowRightBar }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const { newMainRoutes } = useActiveLink(pathname);

  const showRightMenu = () => {
    if (showItems) return;
    toggleShowRightBar(true);
  };

  return (
    <div className={styles.header_line}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.header__navigation_burger}>
          <div className={styles.navigation}>
            {showItems && (
              <ul className={styles.header_links}>
                {newMainRoutes
                  .map((el) => ({ ...el, text: t(el.name) }))
                  .map((item) => {
                    return (
                      <li className={styles.menu_name} key={item.path}>
                        <NavLink
                          to={item.path}
                          className={clsx(styles.menu_link, item.isActive && styles.active)}
                          style={
                            item.children && pathname.includes(item.path)
                              ? { color: '#0fb7c0' }
                              : null
                          }
                          exact={item.exact}
                        >
                          {item.text}
                        </NavLink>
                        {item?.children && (
                          <div className={styles.header_child}>
                            <NavLink
                              to={item.path}
                              className={
                                item.isActive
                                  ? styles.header_child_line_active
                                  : styles.header_child_line
                              }
                            />
                            {item.children?.map((item) => (
                              <NavLink
                                to={item.path}
                                key={item.path}
                                className={clsx(
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
            )}
          </div>
        </div>
      </div>
      <div className={styles.burger_images}>
        <span>
          <BurgerImages onClick={showRightMenu} />
        </span>
      </div>
    </div>
  );
};
