/*
 * @flow
 */
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../../components/headers/AppHeader';
import ChronicleFeatureImg from '../../assets/images/chronicle-feature-shot.png';
import ChronicleStamp from '../../assets/logos/chronicle-product-stamp.png';
import ConnectSection from '../connect/ConnectSection';
import CWPFeatureImg from '../../assets/images/cwp-feature-shot.png';
import CWPStamp from '../../assets/logos/cwp-product-stamp.png';
import FooterSection from '../footer/FooterSection';
import PageSection from '../../components/layout/PageSection';
import PurpleOLogo from '../../assets/images/logo-original.png';
import ReferralsFeatureImg from '../../assets/images/referrals-feature-shot.png';
import ReferralsStamp from '../../assets/logos/referrals-product-stamp.png';
import SteppingUpFeatureImg from '../../assets/images/stepping-up-feature-shot.png';
import SteppingUpStamp from '../../assets/logos/stepping-up-product-stamp.png';

import {
  FeatureShot,
  HeaderContent,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductStampWrapper,
} from './styled/StyledProductComponents';
import { menuStylesForProductPages } from './styled/MenuStyles';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const OtherProductsHeaderContent = styled(HeaderContent)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 40px auto 150px auto;
  }
`;

const CWPTextWrapper = styled(ProductOverviewDescriptionWrapper)`
  justify-content: center;
  width: 432px;
`;

const SteppingUpTextWrapper = styled(ProductOverviewDescriptionWrapper)`
  justify-content: center;
  width: 400px;
`;

const AstrometricsTextWrapper = styled(ProductOverviewDescriptionWrapper)`
  justify-content: center;
  width: 390px;
`;

const CWPFeatureShot = styled(FeatureShot)`
  border: none;
  width: 438px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 274px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 438px;
  }
`;

const ChronicleFeatureShot = styled.img`
  border: none;
  height: 618px;
  width: 359px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 387px;
    width: 224px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 618px;
    width: 359px;
  }
`;

const OtherProductsPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <AppHeader
          logo={PurpleOLogo}
          menuStyles={menuStylesForProductPages} />
      <OtherProductsHeaderContent>
        <ProductIntro>Other products</ProductIntro>
        <ProductDescription>
          {`Explore other products we offer to link data across behavioral health services, criminal justice,
            and public safety.`}
        </ProductDescription>
      </OtherProductsHeaderContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <CWPTextWrapper>
          <ProductStampWrapper src={CWPStamp} width="396px" />
          <ProductOverviewTitle>A data driven approach to managing community work programs</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`CWP is a purpose-built application that provides your jurisdiction with a data driven tool to manage
              participation and completion of alternative sentences to community services.`}
          </ProductOverviewDescription>
        </CWPTextWrapper>
        <CWPFeatureShot bgImage={CWPFeatureImg} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={SteppingUpFeatureImg} />
        <SteppingUpTextWrapper>
          <ProductStampWrapper src={SteppingUpStamp} width="358px" />
          <ProductOverviewTitle>
            Quantify how your mental health affected population interacts with social services
          </ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Visualize and link data form across silos to see how different subsets of individuals affected by mental
              illness interact across social services.`}
          </ProductOverviewDescription>
        </SteppingUpTextWrapper>
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <SteppingUpTextWrapper>
          <ProductStampWrapper src={ReferralsStamp} width="182px" />
          <ProductOverviewTitle>Referrals and service management in one platform</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Enable service providers to manage their own inbound and outbound referrals, as well as wait-time
              and other customer service-focused analytics.`}
          </ProductOverviewDescription>
        </SteppingUpTextWrapper>
        <FeatureShot bgImage={ReferralsFeatureImg} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <ChronicleFeatureShot src={ChronicleFeatureImg} />
        <AstrometricsTextWrapper>
          <ProductStampWrapper src={ChronicleStamp} width="189px" />
          <ProductOverviewTitle>Manage human centered research studies</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Manage enrollment, consent, and multi-sensor data collection for collaborative human centered
              research studies in highly regulated areas.`}
          </ProductOverviewDescription>
        </AstrometricsTextWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default OtherProductsPage;
