import React from 'react';
import Slide from 'react-reveal/Slide';
import { useTranslation } from 'react-i18next';
import { DoubleText } from '../../component/DoubleText/DoubleText';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Slide left>
      <DoubleText header={t('home_header')} body={t('home_text')} />
    </Slide>
  );
};
