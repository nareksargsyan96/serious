import { ServicesComponentRow } from "../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as Group } from "../../Img/Services/Group.svg";
import { useTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import "./Services.css";

export const Services = () => {
  const { t } = useTranslation();
  let text = t("Web_design_development_text");
  let title1 = "Web design &";
  let title2 = "Development";

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name={"flex-revers servicesSubtitle"}
          img={<Group />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        ></ServicesComponentRow>
      </div>
    </Slide>
  );
};
