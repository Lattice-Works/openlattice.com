/*
 * @flow
 */

import styled, { css } from 'styled-components';

const TileGrid = styled.div`
  display: grid;
  grid-gap: 48px;;
  grid-template-columns: 1fr;
  width: 100%;

  ${({ theme }) => css`
    ${theme?.breakpoints?.up('md')} {
      grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
    }
  `}
`;

export default TileGrid;
