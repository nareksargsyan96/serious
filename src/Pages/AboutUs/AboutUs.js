import React from 'react';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import { DoubleText } from '../../component/DoubleText/DoubleText';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Slide left>
      <DoubleText header={t('about_header')} body={t('about_text')} />
    </Slide>
  );
};
