import React from 'react';
import { Heading } from '../Heading/Heading';

import styles from './DoubleText.module.scss';

export const DoubleText = ({ header, body }) => {
  return (
    <div className={styles.main_content}>
      <Heading variant="h1" className={styles.header}>
        {header}
      </Heading>

      <Heading variant="p" className={styles.info_text}>
        {body}
      </Heading>
    </div>
  );
};
