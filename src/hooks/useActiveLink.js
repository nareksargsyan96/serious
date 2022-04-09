import { useState, useEffect } from "react";
import mainRoutes from "../Routes/mainRoutes";

export const useActiveLink = (path) => {
  const [newMainRoutes, setNewMainRoutes] = useState([]);

  useEffect(() => {
    const updatedRoutes = mainRoutes.map((el) => {
      if (el.path === path) {
        if (el.hasOwnProperty("children")) {
          el.children.forEach((item) => {
            item.isActive = false;
          });
        }
        return {
          ...el,
          isActive: true,
        };
      }
      if (el.hasOwnProperty("children")) {
        el.children.forEach((item) => {
          if (item.path === path) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
        });
      }
      return el;
    });
    setNewMainRoutes(updatedRoutes);
  }, [path]);

  return { newMainRoutes };
};
