import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedAboutHooks from './AboutHooks';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <PageWrapper>
        <ConnectedAboutHooks />
      </PageWrapper>
    </>
  );
}
