import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';
import { useScroll } from '../../hooks/useScroll';
import { HeaderMobile } from '../Header/HeaderMobile/HeaderMobile';
import { useWindowSIze } from '../../hooks/useWindowSIze';

import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  const size = useWindowSIze();
  useScroll();
  const [showFooter, setShowFooter] = useState(false);
  const [showRightBar, setShowRightBar] = useState(false);

  useEffect(() => {
    if (size) {
      setShowRightBar(false);
    }
  }, [size]);

  return (
    <div className={styles.layout}>
      {size && <Sidebar />}
      <Header showItems={size} toggleShowRightBar={setShowRightBar} />

      <HeaderMobile showRightBar={showRightBar} toggleShowRightBar={setShowRightBar} />

      <div className={styles.content}>
        <div className={styles.content_children}>{children}</div>
      </div>

      <AnimatePresence initial={false}>
        <Footer showFooter={showFooter} toggleShow={setShowFooter} />
      </AnimatePresence>
    </div>
  );
};
