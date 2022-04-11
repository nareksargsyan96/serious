import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import { ServicesComponentRow } from '../../../../component/ServicesComponent/ServicesComponentRow';
import { ReactComponent as CeoSmmImg } from '../../../../assets/images/Services/CeoSmm.svg';

import './CeoSmm.css';

export const CeoSmm = () => {
  const { t } = useTranslation();

  const text = t('ceosmm_text');
  const title1 = 'Ceo & Smm';

  return (
    <Slide left>
      <div className="main_services">
        <ServicesComponentRow
          class_name="flex-revers ceo_smm"
          img={<CeoSmmImg />}
          mainTitle={title1}
          text={text}
        />
      </div>
    </Slide>
  );
};
