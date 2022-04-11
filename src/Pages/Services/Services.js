import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

import { ServicesComponentRow } from '../../component/ServicesComponent/ServicesComponentRow';
import { ReactComponent as Group } from '../../assets/images/Services/Group.svg';

import './Services.css';

export const Services = () => {
  const { t } = useTranslation();
  const text = t('Web_design_development_text');
  const title1 = 'Web design &';
  const title2 = 'Development';

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name="flex-revers servicesSubtitle"
          img={<Group />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        />
      </div>
    </Slide>
  );
};
