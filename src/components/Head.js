import React from "react";
import { injectIntl, intlShape, defineMessages } from "react-intl";
import { Helmet } from "react-helmet";

const messages = defineMessages({
  title: {
    id: "head.title",
    defaultMessage: "Digging into the Mining Arc"
  },
  description: {
    id: "head.description",
    defaultMessage:
      "The destruction of 44 thousand square miles of forests in the largest mining project in Venezuela"
  },
  keywords: {
    id: "head.keywords",
    defaultMessage: "venezuela, mining arc"
  }
});

class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { intl } = this.props;
    const title = intl.formatMessage(messages.title);
    const description = intl.formatMessage(messages.description);
    const keywords = intl.formatMessage(messages.keywords);
    const url = process.env.SITE_URL || "";
    return (
      <Helmet>
        <html lang={intl.locale} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={`${url}${require("images/facebook-poster.jpg")}`}
        />
      </Helmet>
    );
  }
}

Head.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Head);
