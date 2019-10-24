import styled from 'styled-components';

import {
  NEUTRALS,
  PURPLES
} from '../../core/style/Colors';

import { MEDIA_QUERY_JUR_SM, MEDIA_QUERY_LG } from '../../core/style/Sizes';


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) {
    background: white;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
  }
`;

export const ContentLeft = styled.img`
  height: auto;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) {
    height: auto;
    margin: auto;
    max-width: 435px;
    max-height: 602px;
    padding-top: 50px;
    width: auto;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    background: none;
    height: auto;
    padding: 0;
    width: auto;
  }
`;

export const ContentRight = styled.div`
  background: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 602px;
  }
`;

export const Body = styled.div`
  color: ${NEUTRALS.BLACK};
  font-size: 16px;
  line-height: 22px;
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
  color: ${NEUTRALS.GRAY02};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
`;

export const ListItemText = styled.span`
  color: ${NEUTRALS.GRAY02};
  font-size: 14px;
  line-height: 19px;
`;

export const ListItemLink = styled.a`
  color: ${PURPLES.PP05};
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  text-decoration: none;

  &:visited {
    color: ${PURPLES.PP05};
  }
`;

export const ListItemTitle = styled.div`
  color: ${NEUTRALS.GRAY02};
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;

export const SectionItem = styled.div`
  margin-bottom: 30px;
`;
