import React from "react";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";

const messages = defineMessages({
  title: {
    id: "share.title",
    defaultMessage: "Share this reporting"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Digging into the Mining Arc"
  }
});

const Share = ({ intl }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>
          <Title as="h2">
            <FormattedMessage
              id="share.title"
              defaultMessage="Share this reporting"
            />
          </Title>
        </Container>
      </section>
    </Page>
  );
};

Share.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Share);
