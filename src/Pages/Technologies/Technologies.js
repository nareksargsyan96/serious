import React from 'react';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import { motion } from 'framer-motion';
import { Heading } from '../../component/Heading/Heading';
import { TECHNOLOGIES } from './constants/constants';

import styles from './Technologies.module.scss';

export const Technologies = () => {
  const { t } = useTranslation();

  return (
    <Slide left>
      <div>
        <div className={styles.technologies_wrapper}>
          <Heading variant="h1" className={styles.technologies_header}>
            {t('technologies')}
          </Heading>

          <div className={styles.technologies}>
            <div className={styles.technologies_Info}>
              {TECHNOLOGIES.map(({ name, img }) => (
                <motion.div key={name} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <div>{img}</div>
                  <div>{name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
