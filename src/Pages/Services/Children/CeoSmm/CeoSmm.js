import { ServicesComponentRow } from "../../../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as CeoSmmImg } from "../../../../Img/Services/CeoSmm.svg";
import Slide from "react-reveal/Slide";

import "./CeoSmm.css";

export const CeoSmm = () => {
  let text =
    "Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.";
  let title1 = "Ceo & Smm";

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name={"flex-revers ceo_smm"}
          img={<CeoSmmImg />}
          mainTitle={title1}
          text={text}
        ></ServicesComponentRow>
      </div>
    </Slide>
  );
};
