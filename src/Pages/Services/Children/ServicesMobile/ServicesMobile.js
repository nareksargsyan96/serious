import { ServicesComponentRow } from "../../../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as MobileApp } from "../../../../Img/Services/ServicMobile.svg";
import Slide from "react-reveal/Slide";
import { useTranslation } from "react-i18next";

import "./ServicesMobile.css";

export const ServicesMobile = () => {
  const { t } = useTranslation();
  let text = t("app_development_text");
  let title1 = "Mobile App";
  let title2 = "Development";
  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name={"flex-row servic_mobile"}
          img={<MobileApp />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        ></ServicesComponentRow>
      </div>
    </Slide>
  );
};
