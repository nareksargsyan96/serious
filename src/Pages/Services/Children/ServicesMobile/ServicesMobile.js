import { ServicesComponentRow } from "../../../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as MobileApp } from "../../../../Img/Services/ServicMobile.svg";
import Slide from "react-reveal/Slide";

import "./ServicesMobile.css";

export const ServicesMobile = () => {
  let text =
    "Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.";
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
