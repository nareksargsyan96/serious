import React from 'react';
import clsx from 'clsx';

import styles from './ServicesComponentRow.module.scss';

export const ServicesComponentRow = ({ img, mainTitle, mainTitle2, text, rtl = false }) => {
  return (
    <div className={clsx(styles.main_service, rtl && styles.rtl)}>
      <div className={styles.service_img}>{img}</div>

      <div className={styles.service_text}>
        <span className={styles.mainTitle}>{mainTitle}</span>
        <span className={styles.subtitle}>{mainTitle2}</span>
        <span className={styles.secondText}>{text}</span>
      </div>
    </div>
  );
};
