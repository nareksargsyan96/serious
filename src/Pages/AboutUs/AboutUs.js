import React from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "../../component/Heading/Heading";
import Slide from "react-reveal/Slide";
export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Slide left>
      <div className="main_content">
        <Heading variant="h1" className="header">
          {t("about_header")}
        </Heading>

        <Heading variant="p" className="info_text">
          {t("about_text")}
        </Heading>
      </div>
    </Slide>
  );
};
