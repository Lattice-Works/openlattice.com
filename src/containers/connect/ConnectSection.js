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
import { PURPLE_BG_COLOR_1, BTN_BG_COLOR_1, BTN_BG_COLOR_2 } from '../../core/style/Constants';

/*
 * constants
 */

const EMAIL :string = 'info@openlattice.com';

/*
 * styled components
 */

const Content = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  margin-top: 120px;
`;

const LeftWrapper = styled.div`
  flex: 1;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

const SubTitle = StyledSectionSubTitle.extend`
  color: #fff;
`;

const ConnectSection = () => (
  <PageSection bgColor={PURPLE_BG_COLOR_1}>
    <Content>
      <LeftWrapper>
        <img src={handshakeIcon} alt="handshake icon" />
        <StyledSectionTitle>{'Let\'s work together.'}</StyledSectionTitle>
        <SubTitle>Have a project in mind or want to learn more?</SubTitle>
      </LeftWrapper>
      <RightWrapper>
        <ConnectCTA
            bgColor={BTN_BG_COLOR_1}
            copyLeft="Find a date on Calendly"
            copyRight="Schedule a call"
            icon={callIcon}
            target="https://calendly.com/openlattice/openlattice-website-request" />
        <ConnectCTA
            bgColor={BTN_BG_COLOR_2}
            copyLeft={EMAIL}
            copyRight="Write an Email"
            icon={emailIcon}
            target={`mailto:${EMAIL}`} />
      </RightWrapper>
    </Content>
  </PageSection>
);

export default ConnectSection;
