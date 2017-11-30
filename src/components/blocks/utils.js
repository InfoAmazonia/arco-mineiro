import { css } from 'styled-components';
import { media } from 'styles/utils';

export const paddings = css`
  ${media.phablet`
    padding-left: 10vw;
    padding-right: 10vw;
  `}
  ${media.tablet`
    padding-left: 15vw;
    padding-right: 15vw;
  `}
  ${media.desktop`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
  ${media.desktopHD`
    padding-left: 10vw;
    padding-right: 5vw;
  `}
`;
