import { useEffect, useState } from 'react';
import { history } from './history';
import { useLocation } from 'react-router-dom';
import mainRoutes from '../Routes/mainRoutes';

export const useScroll = () => {
  const [down, setDown] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const { pathname } = useLocation();

  const newMainRoutest = [];
  mainRoutes.map((item) => {
    if (item.children) {
      newMainRoutest.push(item);
      item.children.map((it) => {
        return newMainRoutest.push(it);
      });
    } else {
      return newMainRoutest.push(item);
    }
    return item;
  });

  useEffect(() => {
    const scrollListener = (e) => {
      const down = e.deltaY;
      if (down < 0) {
        setDown((prev) => {
          if (prev <= -500) {
            let nextPath = 0;

            newMainRoutest?.forEach((item, index) => {
              if (item.path === pathname) {
                nextPath = index;
              }
            });

            // eslint-disable-next-line no-unreachable-loop
            while (nextPath < newMainRoutest.length - 1) {
              history.push(newMainRoutest[nextPath + 1].path);
              return 0;
            }

            history.push(newMainRoutest[newMainRoutest.length - 1].path);
            return 0;
          }
          return prev + down;
        });
      } else {
        setScrollTop((prev) => {
          if (prev >= 500) {
            let previousPath;

            newMainRoutest?.forEach((item, index) => {
              if (item.path === pathname) {
                previousPath = index;
              }
            });

            // eslint-disable-next-line no-unreachable-loop
            while (previousPath < newMainRoutest.length - 1) {
              history.push(newMainRoutest[previousPath - 1]?.path);
              return 0;
            }
            history.push(`${newMainRoutest[previousPath - 1].path}`);

            return 0;
          }
          return prev + down;
        });
      }
    };
    window.addEventListener('wheel', scrollListener);

    return () => {
      window.removeEventListener('wheel', scrollListener);
    };
  }, [down, scrollTop, pathname]);
};
