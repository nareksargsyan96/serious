import { ServicesComponentRow } from "../../../../component/ServicesComponent/ServicesComponentRow";
import { ReactComponent as SoftwareImg } from "../../../../Img/Services/Software.svg";

// import "./Software.css";

export const Software = () => {
  let text =
    "Ut at porta velit, non facilisis ante. Ut at augue a purus imperdiet tempus sit amet vitae urna. Integer varius eget nisl eget vulputate. Vivamus consequat, purus et lobortis mattis, turpis odio malesuada velit, eget viverra mi nisl vel enim. Quisque ullamcorper tortor lobortis.";
  let title1 = "Software";
  let title2 = "Development";

  return (
    <div className="main_services">
      <ServicesComponentRow
        class_name={"flex-revers servicesSubtitle"}
        img={<SoftwareImg />}
        mainTitle={title1}
        mainTitle2={title2}
        text={text}
      ></ServicesComponentRow>
    </div>
  );
};
