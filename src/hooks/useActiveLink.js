import React, { useState } from "react";
import { mainRoutes } from "../Routes/mainRoutes";

export const useActiveLink = ({ pathname }) => {
  const [newMainRoutes, setNewMainRoutes] = useState([]);

  mainRoutes = [{ pathname: "sasasa", active: false }];

  useEffect(() => {
    setNewMainRoutes(pathname === "/about/process");
  }, [pathname]);

  return { isActiveAboutFirst };
};
