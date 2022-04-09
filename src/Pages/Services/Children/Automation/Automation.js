import { ServicesComponentRow } from "../../../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as AutomationImg } from "../../../../Img/Services/Automation.svg";
import Slide from "react-reveal/Slide";
import { useTranslation } from "react-i18next";

import "./Automation.css";

export const Automation = () => {
  const { t } = useTranslation();
  let text = t("CRM_text");
  let title1 = "Business Automation &";
  let title2 = "CRM Development";

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name={"flex-row automation"}
          img={<AutomationImg />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        ></ServicesComponentRow>
      </div>
    </Slide>
  );
};
