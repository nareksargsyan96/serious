import React from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "../../component/Heading/Heading";
import Slide from "react-reveal/Slide";

import "./Home.css";
export const Home = () => {
  const { t } = useTranslation();
  return (
    <Slide left>
      <div className="main_content">
        <Heading variant="h1" className="header">
          {t("home_header")}
        </Heading>

        <Heading variant="p" className="info_text">
          {t("home_text")}
        </Heading>
      </div>
    </Slide>
  );
};
