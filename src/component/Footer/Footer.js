import clsx from 'clsx';
import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as LineUp } from '../../assets/images/lineUp.svg';
import { FOOTER_LINKS } from './constants/constants';

import styles from './Footer.module.scss';

export const Footer = ({ showFooter, toggleShow }) => {
  const handleClick = () => {
    toggleShow(!showFooter);
  };

  return (
    <motion.div className={styles.footer}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: !showFooter && '20px 0',
          background: 'none',
        }}
      >
        <motion.button
          className={styles.footer_Line_but}
          animate={{ rotate: showFooter ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={handleClick}
        >
          <LineUp />
        </motion.button>
      </div>
      {showFooter && (
        <motion.div
          className={styles.footer}
          initial={{ translateY: 1000, height: 0 }}
          animate={{ translateY: 0, height: 'auto' }}
          exit={{ translateY: 1000, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <div className={styles.footer_modal}>
              <ul className={styles.footer_social}>
                {FOOTER_LINKS.map(({ id, link, img, className }) => (
                  <li key={id} className={clsx(styles.social, styles[className])}>
                    <a href={link}>{img}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
