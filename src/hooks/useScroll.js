import { useEffect, useState } from "react";
import { history } from "./history";
import { useLocation } from "react-router-dom";
import { mainRoutes } from "../Routes/mainRoutes";

export const useScroll = (ref) => {
  const [down, setDown] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  let location = useLocation();

  let newMainRoutest = [];
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
              if (item.path === location.pathname) {
                nextPath = index;
              }
            });

            while (nextPath < newMainRoutest.length - 1) {
              history.push(newMainRoutest[nextPath + 1].path);
              return 0;
            }

            history.push(newMainRoutest[newMainRoutest.length - 1].path);
            return 0;
          } else {
            return prev + down;
          }
        });
      } else {
        setScrollTop((prev) => {
          if (prev >= 500) {
            let previousPath;

            newMainRoutest?.forEach((item, index) => {
              if (item.path === location.pathname) {
                previousPath = index;
              }
            });

            while (previousPath < newMainRoutest.length - 1) {
              history.push(newMainRoutest[previousPath - 1]?.path);
              return 0;
            }
            history.push(`${newMainRoutest[previousPath - 1].path}`);

            return 0;
          } else {
            return prev + down;
          }
        });
      }
    };
    window.addEventListener("wheel", scrollListener);

    return () => {
      window.removeEventListener("wheel", scrollListener);
    };
  }, [down, scrollTop, location.pathname]);
};
