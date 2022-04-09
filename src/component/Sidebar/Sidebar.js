import React from "react";
import { useTranslation } from "react-i18next";

import "./Sidebar.css";

export const Sidebar = () => {
  const { i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="sidebar">
      <ul className="traslate">
        <li className="traslate_link" onClick={() => changeLang("en")}>
          ENG
        </li>
        <li className="traslate_link" onClick={() => changeLang("rus")}>
          RUS
        </li>
        <li className="traslate_link" onClick={() => changeLang("hy")}>
          ARM
        </li>
      </ul>
    </div>
  );
};
