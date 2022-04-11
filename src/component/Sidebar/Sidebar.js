/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.translate}>
        <button
          className={clsx(styles.btn, currentLang === 'en' && styles.btnActive)}
          onClick={() => changeLang('en')}
        >
          ENG
        </button>
        <button
          className={clsx(styles.btn, currentLang === 'rus' && styles.btnActive)}
          onClick={() => changeLang('rus')}
        >
          RUS
        </button>
        <button
          className={clsx(styles.btn, currentLang === 'hy' && styles.btnActive)}
          onClick={() => changeLang('hy')}
        >
          ARM
        </button>
      </div>
    </div>
  );
};
