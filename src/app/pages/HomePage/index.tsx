import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedHomeHooks from './HomeHooks';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <PageWrapper>
        <ConnectedHomeHooks />
      </PageWrapper>
    </>
  );
}
