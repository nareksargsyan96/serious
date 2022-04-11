import Slide from 'react-reveal/Slide';
import { useTranslation } from 'react-i18next';

import { ServicesComponentRow } from '../../../../component/ServicesComponent/ServicesComponentRow';
import { ReactComponent as AutomationImg } from '../../../../assets/images/Services/Automation.svg';

import './Automation.css';

export const Automation = () => {
  const { t } = useTranslation();
  const text = t('CRM_text');
  const title1 = 'Business Automation &';
  const title2 = 'CRM Development';

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name="flex-row automation"
          img={<AutomationImg />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        />
      </div>
    </Slide>
  );
};
