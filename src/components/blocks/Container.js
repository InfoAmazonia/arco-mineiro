import styled from 'styled-components';
import { media } from 'styles/utils';

export default styled.div`
  margin: 0;
  position: relative;
  ${media.phablet`
    margin: 1rem 0;
  `}
  ${media.tablet`
    margin: 6vw 0;
  `}
  ${media.desktop`
    margin: 2rem 0;
  `}
  ${media.desktopHD`
    margin: 6vw 0;
  `}
`
