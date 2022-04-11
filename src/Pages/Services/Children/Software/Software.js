import { ServicesComponentRow } from "../../../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as SoftwareImg } from "../../../../Img/Services/Software.svg";
import { useTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

// import "./Software.css";

export const Software = () => {
  const { t } = useTranslation();
  let text = t("software_development");
  let title1 = "Software";
  let title2 = "Development";

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name={"flex-revers servicesSubtitle"}
          img={<SoftwareImg />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        ></ServicesComponentRow>
      </div>
    </Slide>
  );
};
