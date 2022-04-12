import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import { ServicesComponentRow } from '../../../../component/ServicesComponent/ServicesComponentRow';
import { ReactComponent as SoftwareImg } from '../../../../assets/images/Services/Software.svg';

import styles from './Software.module.scss';

export const Software = () => {
  const { t } = useTranslation();
  const text = t('software_development');
  const title1 = 'Software';
  const title2 = 'Development';

  return (
    <Slide left>
      <div className={styles.main_services}>
        <ServicesComponentRow
          rtl
          img={<SoftwareImg />}
          mainTitle={title1}
          mainTitle2={title2}
          text={text}
        />
      </div>
    </Slide>
  );
};
