import React from 'react';
import ReactDom from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled from 'styled-components';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/global.css';

import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
addLocaleData([...en, ...pt]);

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const language = (navigator.languages && navigator.languages[0]) ||
navigator.language ||
navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// import localeData from './locales';
// const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

import Header from 'components/Header';
import Body from 'components/Body';
import Bottom from 'components/Bottom';
import Map from 'components/Map';
import Story from 'components/Story';

ReactDom.render(
  <IntlProvider locale={language}>
    <Wrapper>
      <Header />
      <Body>
        <Map />
        <Story />
      </Body>
      {/* <Bottom>
        <p>Test</p>
      </Bottom> */}
    </Wrapper>
  </IntlProvider>,
  document.getElementById('app')
);
