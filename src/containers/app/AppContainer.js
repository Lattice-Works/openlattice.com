/*
 * @flow
 */

import React from 'react';

import {
  LatticeLuxonUtils,
  MuiPickersUtilsProvider,
  ThemeProvider,
  lightTheme,
} from 'lattice-ui-kit';
import { Route, Switch } from 'react-router';

import { AppNav } from '../../components';
import { Routes } from '../../core/router';
import { AboutPage } from '../about';
import { GovernmentPage } from '../government';
import { HomePage } from '../home';
import { PlatformGovernmentPage, PlatformResearchPage } from '../platform';
import { PrivacyPolicyPage } from '../privacy';
import { AstrometricsProductPage } from '../products/astrometrics';
import { CAREProductPage } from '../products/care';
import { ChronicleProductPage } from '../products/chronicle';
import { CWPProductPage } from '../products/cwp';
import { PCMProductPage } from '../products/pcm';
import { ReferralsProductPage } from '../products/referrals';
import { SteppingUpProductPage } from '../products/stepping-up';
import { ResearchPage } from '../research';
import { TermsOfServicePage } from '../terms';
import { WorkingWithUsGovernmentPage, WorkingWithUsResearchPage } from '../workingwithus';

const AppContainer = () => (
  <ThemeProvider theme={lightTheme}>
    <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
      <AppNav />
      <Switch>
        <Route exact path={Routes.ABOUT} component={AboutPage} />
        <Route exact path={Routes.GOVERNMENT} component={GovernmentPage} />
        <Route exact path={Routes.PLATFORM_GOVERNMENT} component={PlatformGovernmentPage} />
        <Route exact path={Routes.PLATFORM_RESEARCH} component={PlatformResearchPage} />
        <Route exact path={Routes.PRIVACY_POLICY} component={PrivacyPolicyPage} />
        <Route exact path={Routes.PRODUCTS_ASTROMETRICS} component={AstrometricsProductPage} />
        <Route exact path={Routes.PRODUCTS_CARE} component={CAREProductPage} />
        <Route exact path={Routes.PRODUCTS_CHRONICLE} component={ChronicleProductPage} />
        <Route exact path={Routes.PRODUCTS_CWP} component={CWPProductPage} />
        <Route exact path={Routes.PRODUCTS_PCM} component={PCMProductPage} />
        <Route exact path={Routes.PRODUCTS_REFERRALS} component={ReferralsProductPage} />
        <Route exact path={Routes.PRODUCTS_STEPPING_UP} component={SteppingUpProductPage} />
        <Route exact path={Routes.RESEARCH} component={ResearchPage} />
        <Route exact path={Routes.TERMS_OF_SERVICE} component={TermsOfServicePage} />
        <Route exact path={Routes.WORKING_WITH_US_GOVERNMENT} component={WorkingWithUsGovernmentPage} />
        <Route exact path={Routes.WORKING_WITH_US_RESEARCH} component={WorkingWithUsResearchPage} />
        <Route component={HomePage} />
      </Switch>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default AppContainer;
