/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { CreateTablePage } from './pages/CreateTablePage/Loadable';
import { AboutPage } from './pages/AboutPage/Loadable';
import { CreateFindSeatPage } from './pages/FindSeatPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Dinner Party"
        defaultTitle="Dinner Party"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Dinner Party App" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/createTable'}
          component={CreateTablePage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/findSeat'}
          component={CreateFindSeatPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/about'}
          component={AboutPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
