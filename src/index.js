import React from 'react';
import ReactDom from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { browserHistory } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';

import configureStore from 'store';
import Application from 'app';

import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
addLocaleData([...en, ...pt]);

const language = (navigator.languages && navigator.languages[0]) ||
                  navigator.language ||
                  navigator.userLanguage;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// import localeData from './locales';
// const messages = localeData[language] || localeData[languageWithoutRegionCode] || localeData.en;

const store = configureStore();
const history = createHistory();

ReactDom.render(
  <Provider store={store.store}>
    <IntlProvider locale={language}>
      <Router history={history}>
        <Application />
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);
