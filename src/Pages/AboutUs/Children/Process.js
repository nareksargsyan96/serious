import React from 'react';
import Slide from 'react-reveal/Slide';
import { AnimatePresence, motion } from 'framer-motion';
import { Heading } from '../../../component/Heading/Heading';
import { PROCESS } from '../constants/constants';

import styles from './Process.module.scss';

export const Process = () => {
  return (
    <Slide left>
      <div>
        <div className={styles.main_process}>
          <Heading variant="h1" className={styles.process}>
            We Simplify Software Development Process
          </Heading>

          <div className={styles.process_info}>
            <AnimatePresence initial={false}>
              {PROCESS.map((item) => (
                <motion.div
                  key={item.text}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={styles.process_icons}>
                    <div>{item.svg}</div>
                    <h1 className={styles.title}>{item.title}</h1>
                  </div>
                  <div>{item.text}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Slide>
  );
};
