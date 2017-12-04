import { css } from 'styled-components';
import { media } from 'styles/utils';

export const margins = css`
  margin-left: 1rem;
  margin-right: 1rem;
  ${media.phablet`
    margin-left: 2rem;
    margin-right: 2rem;
  `}
  ${media.desktop`
    margin-left: 8vw;
    margin-right: 8vw;
  `}
  ${media.desktopHD`
    margin-left: 10vw;
    margin-right: 10vw;
  `}
`;

export const paddings = css`
  padding-left: 1rem;
  padding-right: 1rem;
  ${media.phablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
  ${media.desktop`
    padding-left: 8vw;
    padding-right: 8vw;
  `}
  ${media.desktopHD`
    padding-left: 10vw;
    padding-right: 10vw;
  `}
`;
