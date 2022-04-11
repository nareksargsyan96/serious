import React from 'react';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import { Heading } from '../../component/Heading/Heading';

import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Slide left>
      <div className={styles.main_content}>
        <Heading variant="h1" className={styles.header}>
          {t('about_header')}
        </Heading>

        <Heading variant="p" className={styles.info_text}>
          {t('about_text')}
        </Heading>
      </div>
    </Slide>
  );
};
