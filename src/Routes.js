import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
  // Fluid as FluidLayout,
  // Fixed as FixedLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
} from './views/landingPages';

// Supporting pages
import {
  About as AboutView,
  // Services as ServicesView,
  Contact as ContactView,
  // Pricing as PricingView,
  // Customers as CustomersView,
  // HireUs as HireUsView,
  // Faq as FaqView,
  Privacy as PrivacyView,
  Terms as TermView,

  // ComingSoon as ComingSoonView,
  // MaintenanceMode as MaintenanceModeView,
  // Cover as CoverView,
  NotFound as NotFoundView,
} from './views/supportingPages';

// Authentication pages
// import {
//   Login as LoginView,
//   LoginSimple as LoginSimpleView,
//   Signup as SignupView,
//   SignupSimple as SignupSimpleView,
//   ForgotPassword as ForgotPasswordView,
//   ForgotPasswordSimple as ForgotPasswordSimpleView,
// } from './views/authPages';

// Documentation pages
// import {
//   Introduction as IntroductionView,
//   QuickStart as QuickStartView,
//   TypographyComponent as TypographyComponentView,
//   Shadows as ShadowsView,
//   ContainerComponent as ContainerComponentView,
//   Layouts as LayoutsView,
//   Plugins as PluginsView,
//   Support as SupportView,
//   Icons as IconsView,
//   Illustrations as IllustrationsView,
//   ChangeLog as ChangeLogView,
// } from './views/docs';
const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/terms-of-service"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={TermView}
            layout={MainLayout}
          />
        ))()}
      />
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-about"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={AboutView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-services"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={ServicesView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-contact"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={ContactView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-pricing"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={PricingView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-customers"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={CustomersView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-hire-us"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={HireUsView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-faq"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout {...matchProps} component={FaqView} layout={MainLayout} />*/}
      {/*  ))()}*/}
      {/*/>*/}
      <Route
        exact
        path="/page-privacy"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PrivacyView}
            layout={MainLayout}
          />
        ))()}
      />
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-maintenance-mode"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={MaintenanceModeView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-login"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={LoginView}*/}
      {/*      layout={FluidLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-login-simple"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={LoginSimpleView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-signup"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={SignupView}*/}
      {/*      layout={FluidLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-signup-simple"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={SignupSimpleView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-forgot-password"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={ForgotPasswordView}*/}
      {/*      layout={FluidLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*  exact*/}
      {/*  path="/page-forgot-password-simple"*/}
      {/*  element={((matchProps) => (*/}
      {/*    <WithLayout*/}
      {/*      {...matchProps}*/}
      {/*      component={ForgotPasswordSimpleView}*/}
      {/*      layout={MainLayout}*/}
      {/*    />*/}
      {/*  ))()}*/}
      {/*/>*/}
      <Route
        exact
        path="/page-not-found"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        path="*"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
