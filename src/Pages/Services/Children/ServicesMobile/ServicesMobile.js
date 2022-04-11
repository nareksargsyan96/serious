import Slide from 'react-reveal/Slide';
import { useTranslation } from 'react-i18next';
import { ServicesComponentRow } from '../../../../component/ServicesComponent/ServicesComponentRow';
import { ReactComponent as MobileApp } from '../../../../assets/images/Services/ServicMobile.svg';

import './ServicesMobile.css';

export const ServicesMobile = () => {
  const { t } = useTranslation();
  const text = t('app_development_text');
  const title1 = 'Mobile App';
  const title2 = 'Development';
  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name="flex-row servic_mobile"
          img={<MobileApp />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        />
      </div>
    </Slide>
  );
};
