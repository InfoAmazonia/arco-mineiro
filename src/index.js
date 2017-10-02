import React from 'react';
import ReactDom from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled from 'styled-components';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
addLocaleData([...en, ...pt]);

const Wrapper = styled.div`
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  text-rendering: geometricPrecision;
  font-smooth: grayscale;
  font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  ::selection {
    background: #000;
  }
  ::-moz-selection {
    background: #000;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Playfair Display", serif;
    font-weight: normal;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const language = (navigator.languages && navigator.languages[0]) ||
navigator.language ||
navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// import localeData from './locales';
// const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

import Header from 'components/Header';

ReactDom.render(
  <IntlProvider locale={language}>
    <Wrapper>
      <Header />
    </Wrapper>
  </IntlProvider>,
  document.getElementById('app')
);
