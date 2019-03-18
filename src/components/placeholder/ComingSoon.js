/*
 * @flow
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/images/splash_01.png';
import PageSection from '../layout/PageSection';
import FooterSection from '../../containers/footer/FooterSection';
import StyledSectionTitle from '../headers/StyledSectionTitle';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { N0, N2 } from '../../core/style/Colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${N2};
  margin-bottom: 500px;
  margin-top: 500px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
  }
`;

const TitleText = styled(StyledSectionTitle)`
  color: ${N0};
  text-align: center;
  letter-spacing: 4px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 46px;
    text-align: center;
  }
`;

const ComingSoon = () => (
  <Fragment>
    <PageSection bgImage={backgroundImage}>
      <Content>
        <TitleText>COMING SOON</TitleText>
      </Content>
    </PageSection>
    <FooterSection />
  </Fragment>
);

export default ComingSoon;
