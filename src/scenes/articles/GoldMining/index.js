import React from "react";
import { injectIntl, intlShape } from "react-intl";

import en from "./en.js";
import es from "./es.js";
import pt from "./pt.js";

const map = {
  en,
  es,
  pt
};

class GoldMining extends React.Component {
  render() {
    // const { intl } = this.props;
    const Article = map[window.locale];
    return <Article />;
  }
}

GoldMining.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(GoldMining);
