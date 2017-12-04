import styled from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  margin: 0;
  position: relative;
  ${media.phablet`
    margin: 2rem 0;
  `}
  ${media.tablet`
    margin: 6vw 0;
  `}
`
