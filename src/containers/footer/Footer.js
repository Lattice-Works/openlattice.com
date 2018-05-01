import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import StyledContainerHorizontal from '../../components/layout/StyledContainerHorizontal';
import OpenLatticeLogo from '../../assets/images/logo-original@3x.png';

const StyledWrapper = styled.div

const StyledFooterContainer = StyledContainerHorizontal.extend`
  background: #f9f9fd;
  height: 87px;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
`;

const StyledNavWrapper = styled.span`
  display: flex;
`;

const Logo = styled.img`
  margin-right: 40px;
`;

const Link = styled.span`
  color: #6f788a;
  cursor: pointer;
  font-family: Roboto, 'Open Sans';
  font-size: 14px;
  line-height: 43px;
  margin-right: 40px;
`;

const StyledCopyright = styled.span`
  width: 190px;
  height: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6f788a;
`;

const Footer = () => (
  <HomepageSection background="#f9f9fd">
    <StyledFooterContainer>
      <StyledNavWrapper>
        <Logo src={OpenLatticeLogo} height="43" />
      </StyledNavWrapper>
      <StyledCopyright>Copyright © 2018 OpenLattice</StyledCopyright>
    </StyledFooterContainer>
  </HomepageSection>
);

export default Footer;
