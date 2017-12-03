import { css } from 'styled-components';
import { media } from 'styles/utils';

export const margins = css`
  ${media.phablet`
    margin-left: 10vw;
    margin-right: 10vw;
  `}
  ${media.tablet`
    margin-left: 15vw;
    margin-right: 15vw;
  `}
  ${media.desktop`
    margin-left: 2rem;
    margin-right: 2rem;
  `}
  ${media.desktopHD`
    margin-left: 10vw;
    margin-right: 10vw;
  `}
`;
