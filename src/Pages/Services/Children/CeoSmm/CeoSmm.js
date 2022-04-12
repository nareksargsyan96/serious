import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import { ServicesComponentRow } from '../../../../component/ServicesComponent/ServicesComponentRow';
import { ReactComponent as CeoSmmImg } from '../../../../assets/images/Services/CeoSmm.svg';

import styles from './CeoSmm.module..scss';

export const CeoSmm = () => {
  const { t } = useTranslation();

  const text = t('ceosmm_text');
  const title1 = 'Ceo & Smm';

  return (
    <Slide left>
      <div className={styles.main_services}>
        <ServicesComponentRow rtl img={<CeoSmmImg />} mainTitle={title1} text={text} />
      </div>
    </Slide>
  );
};
