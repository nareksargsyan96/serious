import clsx from 'clsx';
import React from 'react';
import Bounce from 'react-reveal/Bounce';

import { ReactComponent as LineDown } from '../../assets/images/lineDown.svg';
import { ReactComponent as LineUp } from '../../assets/images/lineUp.svg';
import { FOOTER_LINKS } from './constants/constants';

import styles from './Footer.module.scss';

export const Footer = ({ showFooter, toggleShow }) => {
  const handleClick = () => {
    toggleShow(!showFooter);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer_Line}>
        <button className={styles.footer_Line_but} type="button" onClick={handleClick}>
          <div className={styles.footer__btnIcon}>{showFooter ? <LineDown /> : <LineUp />}</div>
          <span className={styles.footer__btnName}>FOOTER</span>
        </button>
      </div>
      <div className={showFooter ? styles.bounce_footer_modal : styles.bounce_footer_modal_close}>
        <Bounce bottom opposite={false} collapse when={showFooter}>
          <div className={styles.footer_modal}>
            <ul className={styles.footer_social}>
              {FOOTER_LINKS.map(({ id, link, img, className }) => {
                return (
                  <li key={id} className={clsx(styles.social, styles[className])}>
                    <a href={link}>{img}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Bounce>
      </div>
    </div>
  );
};
