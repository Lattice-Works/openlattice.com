/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import callIcon from '../../assets/images/call-icon.svg';
import emailIcon from '../../assets/images/email-icon.svg';
import handshakeIcon from '../../assets/images/handshake-icon.svg';

import ConnectCTA from './ConnectCTA';
import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { N1, PK0, PP4, PP5 } from '../../core/style/Colors';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';

/*
 * constants
 */

const EMAIL :string = 'info@openlattice.com';

/*
 * styled components
 */

const Content = styled.div`
  align-items: center;
  color: ${N1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 80px 0 100px 0;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    flex-direction: row;
    margin: 110px 0;
    text-align: left;
  }
`;

const LeftWrapper = styled.div`
  flex: 1;
  margin: 0 0 30px 0;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin: 0;
    margin-right: 30px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 110px;
  justify-content: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    justify-content: space-between;
  }
`;


const Title = StyledSectionTitle.extend`
  color: ${N1};
  margin-bottom: 10px;
`;

const SubTitle = StyledSectionSubTitle.extend`
  color: ${N1};
`;

const ConnectSection = () => (
  <PageSection bgColor={PP4}>
    <Content>
      <LeftWrapper>
        <img src={handshakeIcon} alt="handshake icon" />
        <Title>{'Let\'s work together.'}</Title>
        <SubTitle>Have a project in mind or want to learn more?</SubTitle>
      </LeftWrapper>
      <RightWrapper>
        <ConnectCTA
            bgColor={PK0}
            copyLeft="Find a date on Calendly"
            copyRight="Schedule a call"
            icon={callIcon}
            target="https://calendly.com/openlattice/openlattice-website-request" />
        <ConnectCTA
            bgColor={PP5}
            copyLeft={EMAIL}
            copyRight="Write an Email"
            icon={emailIcon}
            target={`mailto:${EMAIL}`} />
      </RightWrapper>
    </Content>
  </PageSection>
);

export default ConnectSection;
