import styled, { css } from 'styled-components';

import {
  N0,
  N2,
  N4
} from '../../core/style/Colors';

import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
  }
`;

export const Body = styled.div`
  color: ${N4};
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const BodyWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const ListItemNumber = styled.div`
  color: ${N2};
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`;

export const ListItemText = styled.div`
  color: ${N2};
  font-size: 14px;
  line-height: 1.4;
`;

export const ListItemTitle = ListItemText.extend`
  font-weight: 600;
`;

export const SectionItem = styled.div`
  margin-bottom: 30px;
`;

export const ContentLeft = styled.img`
  width: 100%;
  height: auto;
`;

export const ContentRight = styled.div`
  background: ${N0};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
  width: 100%;
`;
